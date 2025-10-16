"use client"

import { IconShare } from "@/components/icons/icon-share"
import { downloadChart } from "@/utils/download-chart"
import { useCharacteristicsStore } from "../../_store/characteristics-store"

export default function ShareTargetCharacteristicsButton() {
	const chart = useCharacteristicsStore(state => state.targetCharacteristicsChart)

	function handleShare() {
		if (!chart) return

		const now = Date.now()
		const fileName = `target-characteristics-${now}`
		downloadChart(chart, fileName)
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
