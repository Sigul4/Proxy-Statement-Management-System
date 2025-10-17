import { getAllPostsMeta } from "@/utils/mdx-utils"
import Image from "next/image"
import AppBar from "../_components/app-bar/app-bar"
import Footer from "../_components/footer/footer"
import BlogPost from "./_components/blog-post"
import IconMoreOptions from "./_components/icon-more-options"
import { blogItems } from "./_constants/blog-items"

export default async function BlogPage() {
	const posts = await getAllPostsMeta()

	return (
		<div className="flex h-dvh flex-col">
			<div className="container py-2.5">
				<AppBar />
			</div>
			<div className="container my-12 flex-1">
				<div className="flex items-start justify-between">
					<h2 className="text-4xl font-bold tracking-[1.2px] text-[#274B56]">Recent Posts</h2>
					<input
						type="text"
						placeholder="Search..."
						className="h-[40px] w-[300px] rounded-lg border-[#274B56] bg-[#ECF1F2] px-4 py-3 text-sm placeholder:tracking-[0.7px] placeholder:text-[#274B56]"
					/>
				</div>
				<section className="mt-8">
					<div className="relative h-[600px] w-full overflow-hidden">
						<Image
							src="/data/blog/blog-splash-1.png"
							width={450}
							height={600}
							alt="Blog 1"
							className="h-[600px] w-full"
						/>
						<div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between p-16">
							<div className="flex w-full items-center justify-between">
								<p className="text-white">May 5, 2024</p>
								<IconMoreOptions />
							</div>
						</div>
						<div className="absolute bottom-0 left-0 flex h-full w-full items-end p-16">
							<h3 className="text-4xl font-bold text-white">networkBlog Monthly Knowledge+: April ‘24 Activism Highlights</h3>
							<p>Read 11</p>
						</div>
					</div>
					<div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
						{blogItems.map((item, index) => (
							<BlogPost key={index} {...item} src={item.image} />
						))}
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}
