import DisclosurePeriodVolumeChart from "./disclosure-period-volume-chart"

export default function DisclosurePeriodVolume() {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="font-semibold">Previous 60-day transactions</h3>
			<DisclosurePeriodVolumeChart />
		</div>
	)
}
