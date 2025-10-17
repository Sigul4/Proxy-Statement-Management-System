import { SectionCard } from "@/components/section-card"
import { HightlightsTooltip } from "./_components/highlights-tooltip"
import { HightlightsList } from "./_components/hightlights-list"

export default function Hightlights() {
	return (
		<div className="flex flex-col gap-8">
			<SectionCard title="Highlights list" toolbar={<HightlightsTooltip />}>
				<HightlightsList />
			</SectionCard>
		</div>
	)
}
