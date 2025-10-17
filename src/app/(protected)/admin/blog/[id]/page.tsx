"use client"

import { BlogPost, getBlogPost, updateBlogPost } from "@/app/api/auth/[...nextauth]/blog/blog.service"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckIcon, CircleBackslashIcon, Pencil1Icon } from "@radix-ui/react-icons"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// New component for editing JSON content
const JsonEditor = ({ value, onChange }) => {
	const [jsonString, setJsonString] = useState(JSON.stringify(value, null, 2))
	const [error, setError] = useState("")

	const handleChange = e => {
		setJsonString(e.target.value)
		try {
			const parsed = JSON.parse(e.target.value)
			onChange(parsed)
			setError("")
		} catch (err) {
			setError("Invalid JSON")
		}
	}

	return (
		<div>
			<Textarea value={jsonString} onChange={handleChange} className="h-screen font-mono text-sm" rows={10} />
			{error && <p className="mt-2 text-red-500">{error}</p>}
		</div>
	)
}

export default function PostDetailsPage() {
	const router = useRouter()
	const params = useParams()
	const [postData, setPostData] = useState<BlogPost | null>(null)
	const [loading, setLoading] = useState(true)
	const [editMode, setEditMode] = useState<Record<string, boolean>>({})
	const [editedValues, setEditedValues] = useState<Partial<BlogPost>>({})

	useEffect(() => {
		const fetchPostData = async () => {
			if (params.id && !Array.isArray(params.id)) {
				try {
					const post = await getBlogPost(params.id)
					setPostData(post)
					setEditedValues(post || {})
				} catch (error) {
					console.error("Error fetching post data:", error)
				} finally {
					setLoading(false)
				}
			}
		}
		fetchPostData()
	}, [params.id])

	const handleEdit = (field: keyof BlogPost) => {
		setEditMode(prev => ({ ...prev, [field]: true }))
	}

	const handleSave = async (field: keyof BlogPost) => {
		if (postData) {
			try {
				const updatedPost = await updateBlogPost(postData.id, { [field]: editedValues[field] })
				setPostData(updatedPost)
				setEditMode(prev => ({ ...prev, [field]: false }))
			} catch (error) {
				console.error("Error updating post:", error)
			}
		}
	}

	const handleInputChange = (field: keyof BlogPost, value: any) => {
		setEditedValues(prev => ({ ...prev, [field]: value }))
	}

	const handleStatusChange = async (status: string) => {
		if (postData) {
			try {
				const updatedPost = await updateBlogPost(postData.id, { status })
				setPostData(updatedPost)
			} catch (error) {
				console.error("Error updating post status:", error)
			}
		}
	}

	if (loading) {
		return <div>Loading...</div>
	}

	if (!postData) {
		return <div>Post not found</div>
	}

	const renderEditableField = (label: string, field: keyof BlogPost, type: "input" | "textarea" | "json" = "input") => (
		<div className="mb-8 flex items-start gap-5">
			<div className="flex items-center gap-2">
				{editMode[field] || (
					<button onClick={() => handleEdit(field)} className="ml-2">
						<Pencil1Icon />
					</button>
				)}
				<span className="font-semibold">{label}: </span>
			</div>
			{editMode[field] ? (
				<>
					{type === "input" ? (
						<Input
							value={editedValues[field] as string}
							onChange={e => handleInputChange(field, e.target.value)}
							className="inline-block"
						/>
					) : type === "textarea" ? (
						<Textarea
							value={editedValues[field] as string}
							onChange={e => handleInputChange(field, e.target.value)}
							className="inline-block"
						/>
					) : (
						<div className="w-screen">
							<JsonEditor value={editedValues[field]} onChange={value => handleInputChange(field, value)} />
						</div>
					)}
					<button onClick={() => handleSave(field)} className="ml-2">
						<CheckIcon />
					</button>
				</>
			) : (
				<>
					{type === "input" ? (
						<span>{String(postData[field])}</span>
					) : type === "textarea" ? (
						<p className="mt-2">
							{typeof postData[field] === "string"
								? (postData[field] as string).substring(0, 100) + "..."
								: JSON.stringify(postData[field])}
						</p>
					) : (
						<p className="mt-2">{JSON.stringify(postData[field])?.substring(0, 100) + "..."}</p>
					)}
				</>
			)}
		</div>
	)
	return (
		<div className="min-h-screen">
			<div>
				<button onClick={() => router.push(`/admin/blog`)} className="mb-6">
					Back to Posts
				</button>

				<div className="border-slate-150 mb-8 rounded-lg border-2 bg-white p-8 outline-offset-0">
					<div className="mb-8">
						<div className="mb-8 flex gap-5">
							{postData.coverMedia.image?.url ? (
								<img
									className="h-[50px] w-[50px] rounded-full"
									src={postData.coverMedia.image.url}
									alt={postData.title}
								/>
							) : (
								<div className="h-[50px] w-[50px] rounded-full bg-slate-200">
									<CircleBackslashIcon className="h-full w-full text-slate-400" />
								</div>
							)}
							<h1 className="mb-2 w-full text-3xl font-bold">{renderEditableField("Title", "title")}</h1>
						</div>
						<Badge className="text-lg">{postData.status}</Badge>
					</div>

					<div className="flex flex-col gap-4">
						<div className="rounded-lg border-2 border-slate-100 bg-white p-6 text-sm">
							<h2 className="mb-4 font-semibold">Post Information</h2>
							{renderEditableField("Author", "owner.name")}
							{renderEditableField("Category IDs", "categoryIds")}
							{renderEditableField("Tag IDs", "tagIds")}
							{renderEditableField("Slug", "slug")}
							{renderEditableField("Language", "language")}
							{renderEditableField("Minutes to Read", "minutesToRead")}
						</div>

						<div className="rounded-lg border-2 border-slate-100 bg-white p-6 text-sm">
							<h2 className="mb-4 font-semibold">Content</h2>
							{renderEditableField("Excerpt", "excerpt", "textarea")}
							{renderEditableField("Content", "content", "json")}
						</div>
					</div>
				</div>

				<div className="border-slate-150 mb-8 rounded-lg border-2 bg-white p-8 outline-offset-0">
					<h2 className="mb-4 text-xl font-semibold">SEO Information</h2>
					{renderEditableField("SEO Title", "seoData.tags[0].props.content")}
					{renderEditableField("SEO Description", "seoData.tags[1].props.content", "textarea")}
					{renderEditableField("SEO Keywords", "seoData.settings.keywords", "json")}
				</div>

				<div className="border-slate-150 mb-8 rounded-lg border-2 bg-white p-8 outline-offset-0">
					<h2 className="mb-4 text-xl font-semibold">Post Status</h2>
					<div className="mb-4 flex items-center">
						<span className="mr-2 font-semibold">Status: </span>
						<select
							value={postData.status}
							onChange={e => handleStatusChange(e.target.value)}
							className="rounded border p-1"
						>
							<option value="draft">Draft</option>
							<option value="published">Published</option>
							<option value="archived">Archived</option>
						</select>
					</div>
				</div>

				<div className="border-slate-150 mb-8 rounded-lg border-2 bg-white p-8 outline-offset-0">
					<h2 className="mb-4 text-xl font-semibold">Metrics</h2>
					<div className="grid grid-cols-3 gap-4">
						<div>
							<span className="font-semibold">Views: </span>
							{postData.viewCount}
						</div>
						<div>
							<span className="font-semibold">Likes: </span>
							{postData.likeCount}
						</div>
						<div>
							<span className="font-semibold">Comments: </span>
							{postData.commentCount}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
