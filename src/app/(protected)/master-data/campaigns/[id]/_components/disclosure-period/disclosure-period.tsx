import { SectionCard } from "@/components/section-card"
import DisclosurePeriodDailyReturn from "./disclosure-period-daily-return"
import DisclosurePeriodPrevious60Days from "./disclosure-period-previous-60-days"
import DisclosurePeriodVolume from "./disclosure-period-volume"

export default function DisclosurePeriod() {
	return (
		<SectionCard title="Disclosure period">
			<div className="flex flex-col gap-4">
				<DisclosurePeriodDailyReturn />
				<DisclosurePeriodPrevious60Days />
				<DisclosurePeriodVolume />
			</div>
		</SectionCard>
	)
}
