import IconMoreOptions from "../../_components/icon-more-options"
import ChipReadingTime from "./chip-reading-time"
import Icon14 from "./icon-14"

export default function BlogDetailSplash({ content }: { content: string }) {
	return (
		<header className="h-[500px] w-full bg-[url('/data/blog/blog-detail-splash.png')] bg-cover bg-no-repeat">
			<div className="flex h-full flex-col justify-between px-[120px] py-12">
				<div className="flex justify-between">
					<p className="font-medium tracking-[0.8px] text-white">May 5, 2024</p>
					<IconMoreOptions />
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col">
						<div className="flex items-center gap-2">
							<Icon14 />
							<p className="font-medium tracking-[0.8px] text-white">networkBlog Community</p>
						</div>
						<p className="max-w-[700px] text-balance text-4xl font-bold leading-[52px] text-white">
							networkBlog Monthly Knowledge+: April ‘24 Activism Highlights
						</p>
					</div>
					<div className="flex flex-col justify-end">
						<ChipReadingTime content={content} />
					</div>
				</div>
			</div>
		</header>
	)
}
