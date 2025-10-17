"use client"

import { IconShare } from "@/components/icons/icon-share"
import { downloadChart } from "@/utils/download-chart"
import { usePorfolioStore } from "../../_store/portfolio-store"

export default function SharePortfolioFollowerReturnButton() {
	const portfolioFollowerReturnChart = usePorfolioStore(state => state.portfolioFollowerReturnChart)

	function handleShare() {
		if (!portfolioFollowerReturnChart) return

		const now = Date.now()
		const fileName = `portfolio-follower-return-${now}`
		downloadChart(portfolioFollowerReturnChart, fileName)
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
