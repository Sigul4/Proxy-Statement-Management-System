import Image from "next/image"
import Link from "next/link"
import IconComment from "./icon-comment"
import IconLike from "./icon-like"
import IconView from "./icon-view"

export default function BlogPost({
	id,
	src,
	title,
	views,
	comments,
	likes
}: {
	id: number
	src: string
	title: string
	views: number
	comments: number
	likes: number
}) {
	return (
		<article>
			<header>
				<Link href={`/blog/${id}`}>
					<Image src={src} width={360} height={224} alt="Blog 1" className="w-full" />
				</Link>
			</header>
			<Link href={`/blog/${id}`}>
				<h3 className="mt-4 font-bold leading-8 tracking-[1.2px] text-[#274B56]">{title}</h3>
			</Link>
			<footer className="mt-8 flex items-center gap-8 text-[#274B56]">
				<div className="flex items-center gap-3">
					<IconView />
					<span className="text-[#B8B8B8]">{views}</span>
				</div>
				<div className="flex items-center gap-3">
					<IconComment />
					<span className="text-[#B8B8B8]">{comments}</span>
				</div>
				<div className="flex items-center gap-3">
					<IconLike />
					<span className="text-[#B8B8B8]">{likes}</span>
				</div>
			</footer>
		</article>
	)
}
