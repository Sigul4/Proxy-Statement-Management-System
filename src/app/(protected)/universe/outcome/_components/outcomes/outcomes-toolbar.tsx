"use client"

import ChartLegendItem from "@/components/chart-legend-item"
import DownloadSectionAsImageButton from "@/components/download-section-as-image-button"
import { ChartData } from "chart.js/auto"
import { useOutcomesStore } from "../../_store/outcomes-store"

export default function OutcomesToolbar({ data }: { data: ChartData }) {
	const chart = useOutcomesStore(state => state.outcomesChart)

	return (
		<div className="flex items-center gap-8">
			<div className="flex items-center gap-6">
				{data.datasets.map((dataset, index) => (
					<ChartLegendItem key={index} color={dataset.backgroundColor as string} text={dataset.label as string} />
				))}
			</div>
			<div>
				<DownloadSectionAsImageButton name="outcomes-chart" chart={chart} elementId="outcomes-chart" />
			</div>
		</div>
	)
}
