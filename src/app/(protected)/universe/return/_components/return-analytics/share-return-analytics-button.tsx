"use client"

import { IconShare } from "@/components/icons/icon-share"
import { downloadChart } from "@/utils/download-chart"
import { useUniverseReturnStore } from "../../_store/universe-return-store"

export default function ShareReturnAnalyticsButton() {
	const returnAnalyticsChart = useUniverseReturnStore(state => state.returnAnalyticsChart)

	function handleShare() {
		if (!returnAnalyticsChart) return

		const now = Date.now()
		const fileName = `return-analytics-chart-${now}`
		downloadChart(returnAnalyticsChart, fileName)
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
