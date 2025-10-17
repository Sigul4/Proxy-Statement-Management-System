"use client"

import { IconShare } from "@/components/icons/icon-share"
import { downloadChart } from "@/utils/download-chart"
import { useCharacteristicsStore } from "../../_store/characteristics-store"

export default function SharePositionMetricsButton() {
	const positionMetricsChart = useCharacteristicsStore(state => state.positionMetricsChart)

	function handleShare() {
		if (!positionMetricsChart) return

		const now = Date.now()
		const fileName = `position-metrics-${now}`
		downloadChart(positionMetricsChart, fileName)
	}

	return (
		<button
			className="flex items-center rounded-md bg-[#F1F1F5] p-2 text-neutral-500 hover:bg-neutral-200"
			onClick={handleShare}
		>
			<IconShare />
		</button>
	)
}
