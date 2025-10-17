"use client"

import { IconShare } from "@/components/icons/icon-share"
import { downloadChart } from "@/utils/download-chart"
import { useCharacteristicsStore } from "../../_store/characteristics-store"

export default function ShareLengthOfCampaignsButton() {
	const chart = useCharacteristicsStore(state => state.lengthOfCampaignsChart)

	function handleShare() {
		if (!chart) return

		const now = Date.now()
		const fileName = `length-of-campaigns-${now}`
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
