import DisclosurePeriodDailyReturnChart from "./disclosure-period-daily-return-chart"

export default function DisclosurePeriodDailyReturn() {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="font-semibold">Daily return</h3>
			<DisclosurePeriodDailyReturnChart />
		</div>
	)
}
