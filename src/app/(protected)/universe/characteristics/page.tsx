import InformationCharacteristics from "./_components/information-characteristics"
import LengthOfCampaigns from "./_components/length-of-campaigns/length-of-campaigns"
import { PositionMetrics } from "./_components/position-metrics/position-metrics"
import { TargetCharacteristics } from "./_components/target-characteristics/target-characteristics"

export default function UniverseCharacteristicsPage() {
	return (
		<div className="flex flex-col gap-8">
			<InformationCharacteristics />
			<PositionMetrics />
			<TargetCharacteristics />
			<LengthOfCampaigns />
		</div>
	)
}
