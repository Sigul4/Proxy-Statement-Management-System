import { PositionMetricsChart } from "./position-metrics-chart"
import PositionMetricsLegend from "./position-metrics-legend"
import { PositionMetricsTabs } from "./position-metrics-tabs"
import SharePositionMetricsButton from "./share-position-metrics-button"

const tabs = ["Market Capitalization of targets", "Initial size of position", "Stake at filing date"]

export function PositionMetrics() {
	return (
		<section className="flex w-full grow flex-col gap-10 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-8">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Position Metrics</p>
						<PositionMetricsTabs items={tabs} />
					</div>
					<div className="flex gap-6">
						<PositionMetricsLegend />
						<SharePositionMetricsButton />
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<PositionMetricsChart />
			</div>
		</section>
	)
}
