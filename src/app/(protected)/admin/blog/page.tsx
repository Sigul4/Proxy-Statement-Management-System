import { SectionCard } from "@/components/section-card"
import { BlogList } from "./_components/blog-list"
import { BlogsTooltip } from "./_components/blog-tooltip"

export default function Blog() {
	return (
		<div className="flex flex-col gap-8">
			<SectionCard title="Blogs list" toolbar={<BlogsTooltip />}>
				<BlogList />
			</SectionCard>
		</div>
	)
}
