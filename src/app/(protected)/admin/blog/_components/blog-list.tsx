"use client"

import { BlogPost, createBlogPost, deleteBlogPost, listBlogPosts } from "@/app/api/auth/[...nextauth]/blog/blog.service"
import Button from "@/app/auth/_components/button"
import { cn } from "@/lib/utils"
import { CircleBackslashIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function BlogList() {
	const [blog, setBlogs] = useState<BlogPost[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const router = useRouter()

	useEffect(() => {
		fetchBlogs()
	}, [])

	const fetchBlogs = async () => {
		try {
			const fetchedBlogs = await listBlogPosts()
			setBlogs(fetchedBlogs)
		} catch (error) {
			console.error("Error fetching blog:", error)
		}
	}

	const handleDelete = async (id: string) => {
		try {
			await deleteBlogPost(id)
			await fetchBlogs()
		} catch (error) {
			console.error("Error deleting blog:", error)
		}
	}

	const handleOpenDetails = async (id: string) => {
		router.push(`/admin/blog/${id}`)
	}

	const handleFillPosts = async () => {
		const samplePost = {
			title: "networkBlog Monthly Knowledge+: July 24 Activism Highlights ",
			excerpt:
				"Hello, and welcome to the latest edition of Knowledge+. In July, we observed 33 active 13D campaigns, based on the most recent filings...",
			content:
				"Hello, and welcome to the latest edition of Knowledge+. In July, we observed 33 active 13D campaigns, based on the most recent filings and updates. These campaigns highlighted a mix of triumphs and obstacles faced by various activist investors. Among them, there were a total of 6 new 13D campaigns. Let's take a closer look at each one.",
			slug: "networkBlog-monthly-knowledge-july-24-activism-highlights",
			coverImage: {
				id: "a49de2_3b245691609547c1a25918386532f788~mv2.jpg",
				url: "https://static.wixstatic.com/media/a49de2_3b245691609547c1a25918386532f788~mv2.jpg"
			},
			author: {
				id: "e7a8bf57-0334-487f-9a40-245edd226b12",
				name: "DEF 14 Community"
			},
			firstPublishedDate: "2024-08-07T14:17:32.579Z",
			lastPublishedDate: "2024-08-07T14:19:54.678Z",
			categoryIds: [],
			tagIds: [],
			status: "published",
			language: "en",
			seoData: {
				title: "networkBlog Monthly Knowledge+: July 24 Activism Highlights",
				description:
					"Discover the key themes and insights from July's activism campaigns in our latest edition of Knowledge+. From corporate governance overhauls and strategic alternatives to legal challenges and global impact, explore how activist investors are shaping the market. Dive into notable campaigns involving Starboard Value, Oasis Management, and more. Get a glimpse into the detailed analyses and updates available in our Activist Alpha database.",
				keywords: ["activism"]
			}
		}

		try {
			await createBlogPost(samplePost)
			await fetchBlogs()
		} catch (error) {
			console.error("Error creating sample blog post:", error)
		}
	}

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentBlogs = blog.slice(indexOfFirstItem, indexOfLastItem)

	return (
		<>
			<div className="relative">
				<div className="w-full overflow-x-auto pb-2">
					<table className="w-full gap-8">
						<thead className="text-[#777]">
							<tr>
								<th className="py-3 text-start text-megamicro font-normal">Title</th>
								<th className="text-start text-megamicro font-normal">Author</th>
								<th className="text-start text-megamicro font-normal">Status</th>
								<th className="text-start text-megamicro font-normal">Published At</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="text-micro font-normal tracking-wide text-[#1B1B1B]">
							{currentBlogs.map(blog => (
								<tr key={blog.id} className="gap-5 border-b first-of-type:border-t">
									<TableTd>
										<div className="flex flex-row items-center gap-5">
											{blog.coverMedia.image?.url ? (
												<img
													className="h-[50px] w-[50px] rounded-full"
													src={blog.coverMedia.image.url}
													alt={blog.title}
												/>
											) : (
												<div className="h-[50px] w-[50px] rounded-full bg-slate-200">
													<CircleBackslashIcon className="h-full w-full text-slate-400" />
												</div>
											)}
											<span>{blog.title}</span>
										</div>
									</TableTd>
									<TableTd>{blog.owner?.name}</TableTd>
									<TableTd>{blog.status}</TableTd>
									<TableTd>
										{blog.firstPublishedDate ? new Date(blog.firstPublishedDate).toLocaleDateString() : "Not published"}
									</TableTd>
									<TableTd>
										<div className="flex items-center justify-end gap-2">
											<Button
												variant="outline"
												className="aspect-square rounded-full p-2"
												onClick={() => handleOpenDetails(blog.id)}
											>
												<Pencil1Icon />
											</Button>
											<Button
												variant="outline"
												className="aspect-square rounded-full p-2"
												onClick={() => handleDelete(blog.id)}
											>
												<TrashIcon />
											</Button>
										</div>
									</TableTd>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex w-full justify-between py-6 text-xs">
				<p className="text-xs text-[#1B1B1B]">
					Shown{" "}
					<span className="font-semibold">
						{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, blog.length)}
					</span>{" "}
					items
				</p>
				<div className="flex gap-2">
					<p className="mr-2">Total {Math.ceil(blog.length / itemsPerPage)} pages</p>
					<span className="mr-1 font-semibold" onClick={() => setCurrentPage(1)}>
						{"<<"}
					</span>
					<span className="mr-1 font-semibold" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
						{"<"}
					</span>
					<div className="flex gap-2 text-[#999]">
						{[...Array(Math.min(7, Math.ceil(blog.length / itemsPerPage)))].map((_, index) => (
							<span
								key={index}
								className={cn("cursor-pointer", currentPage === index + 1 ? "font-semibold text-[#1B1B1B]" : "")}
								onClick={() => setCurrentPage(index + 1)}
							>
								{index + 1}
							</span>
						))}
					</div>
					<span
						className="mr-1 font-semibold"
						onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(blog.length / itemsPerPage)))}
					>
						{">"}
					</span>
					<span className="font-semibold" onClick={() => setCurrentPage(Math.ceil(blog.length / itemsPerPage))}>
						{">>"}
					</span>
				</div>
				<p className="flex gap-2 text-xs text-[#1B1B1B]">
					Show by:
					<ul className="flex gap-2 font-normal">
						{[10, 20, 50, 100].map(num => (
							<li
								key={num}
								className={cn("cursor-pointer", itemsPerPage === num ? "font-semibold" : "text-[#999]")}
								onClick={() => setItemsPerPage(num)}
							>
								{num}
							</li>
						))}
					</ul>
				</p>
			</div>
			<Button onClick={handleFillPosts} className="mt-4">
				Fill Posts
			</Button>
		</>
	)
}

function TableTd({ className, children }: { className?: string; children: React.ReactNode }) {
	return <td className={cn("px-3 py-3", className)}>{children}</td>
}
