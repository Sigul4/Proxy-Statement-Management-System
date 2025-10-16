"use client"

import { BlogPost, createBlogPost } from "@/app/api/auth/[...nextauth]/blog/blog.service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"

const JsonEditor = ({ value, onChange }: { value: any; onChange: (value: any) => void }) => {
	const [jsonString, setJsonString] = useState(JSON.stringify(value, null, 2))
	const [error, setError] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
			<Textarea value={jsonString} onChange={handleChange} className="h-64 font-mono text-sm" rows={10} />
			{error && <p className="mt-2 text-red-500">{error}</p>}
		</div>
	)
}
export default function AddBlogPostPage() {
	const router = useRouter()
	const [postData, setPostData] = useState({
		title: "",
		excerpt: "",
		slug: "",
		language: "en",
		minutesToRead: 0,
		content: {
			blocks: [],
			entityMap: {},
			documentStyle: {},
			VERSION: "1",
			ID: ""
		},
		coverMedia: {
			enabled: true,
			image: {
				id: "",
				url: "",
				height: 0,
				width: 0,
				filename: ""
			},
			displayed: true,
			custom: false
		},
		seoData: {
			tags: [
				{
					type: "meta",
					props: {
						name: "description",
						content: ""
					},
					children: "",
					custom: false,
					disabled: false
				}
			],
			settings: {
				preventAutoRedirect: false,
				keywords: []
			}
		},
		status: "draft"
	})

	const handleInputChange = (field: string, value: any) => {
		setPostData(prev => ({ ...prev, [field]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const newPostData: Omit<BlogPost, "id"> = {
				...postData,
				firstPublishedDate: new Date().toISOString(),
				lastPublishedDate: new Date().toISOString(),
				url: {
					base: `/admin/blog/${postData.slug}`,
					path: postData.slug
				},
				featured: false
				// Add other required properties here with default values
			}
			const newPost = await createBlogPost(newPostData)
			console.log("New post created:", newPost)
			router.push(`/admin/blog/${newPost.id}`)
		} catch (error) {
			console.error("Error creating post:", error)
		}
	}
	return (
		<div className="min-h-screen p-8">
			<h1 className="mb-8 text-3xl font-bold">Add New Blog Post</h1>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label className="mb-2 block font-semibold">Title</label>
					<Input value={postData.title} onChange={e => handleInputChange("title", e.target.value)} required />
				</div>

				<div>
					<label className="mb-2 block font-semibold">Excerpt</label>
					<Textarea value={postData.excerpt} onChange={e => handleInputChange("excerpt", e.target.value)} required />
				</div>

				<div>
					<label className="mb-2 block font-semibold">Slug</label>
					<Input value={postData.slug} onChange={e => handleInputChange("slug", e.target.value)} required />
				</div>

				<div>
					<label className="mb-2 block font-semibold">Language</label>
					<Input value={postData.language} onChange={e => handleInputChange("language", e.target.value)} required />
				</div>

				<div>
					<label className="mb-2 block font-semibold">Minutes to Read</label>
					<Input
						type="number"
						value={postData.minutesToRead}
						onChange={e => handleInputChange("minutesToRead", parseInt(e.target.value))}
						required
					/>
				</div>

				<div>
					<label className="mb-2 block font-semibold">Content</label>
					<JsonEditor value={postData.content} onChange={value => handleInputChange("content", value)} />
				</div>

				<div>
					<label className="mb-2 block font-semibold">Cover Image URL</label>
					<Input
						value={postData.coverMedia.image.url}
						onChange={e =>
							handleInputChange("coverMedia", {
								...postData.coverMedia,
								image: { ...postData.coverMedia.image, url: e.target.value }
							})
						}
					/>
				</div>

				<div>
					<label className="mb-2 block font-semibold">SEO Description</label>
					<Textarea
						value={postData.seoData.tags[0].props.content}
						onChange={e =>
							handleInputChange("seoData", {
								...postData.seoData,
								tags: [
									{ ...postData.seoData.tags[0], props: { ...postData.seoData.tags[0].props, content: e.target.value } }
								]
							})
						}
					/>
				</div>

				<div>
					<label className="mb-2 block font-semibold">SEO Keywords</label>
					<Input
						value={postData.seoData.settings.keywords.join(", ")}
						onChange={e =>
							handleInputChange("seoData", {
								...postData.seoData,
								settings: {
									...postData.seoData.settings,
									keywords: e.target.value.split(", ").map(keyword => ({ term: keyword, isMain: false }))
								}
							})
						}
					/>
				</div>

				<div>
					<label className="mb-2 block font-semibold">Status</label>
					<select
						value={postData.status}
						onChange={e => handleInputChange("status", e.target.value)}
						className="w-full rounded border p-2"
					>
						<option value="draft">Draft</option>
						<option value="published">Published</option>
						<option value="archived">Archived</option>
					</select>
				</div>

				<Button type="submit" className="mt-4">
					Create Post
				</Button>
			</form>
		</div>
	)
}
