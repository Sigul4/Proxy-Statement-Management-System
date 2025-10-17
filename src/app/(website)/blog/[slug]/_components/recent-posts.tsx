import Link from "next/link"
import BlogPost from "../../_components/blog-post"
import { blogItems } from "../../_constants/blog-items"

const recentPosts = [...blogItems.slice(0, 3)]

export default function RecentPosts() {
	return (
		<section className="py-12">
			<header className="flex items-start justify-between">
				<h3 className="text-[40px] font-bold leading-[52px] tracking-[1.2px] text-[#274B56]">Recent Posts</h3>
				<Link href="/blog" className="text-sm tracking-[0.8px] text-[#4E9BB4]">
					See more
				</Link>
			</header>
			<div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
				{recentPosts.map((item, index) => (
					<BlogPost key={index} {...item} src={item.image} />
				))}
			</div>
		</section>
	)
}
