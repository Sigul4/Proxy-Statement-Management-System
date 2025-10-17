import { IconShare } from "@/components/icons/icon-share"

export default function ShareCampaignInvestmentReturnsButton() {
	// const abnormalReturnByDemandTypeChart = useUniverseReturnStore(state => state.abnormalReturnByDemandTypeChart)

	// function handleShare() {
	// 	if (!abnormalReturnByDemandTypeChart) return

	// 	const now = Date.now()
	// 	const fileName = `abnormal-return-by-demand-type-chart-${now}`
	// 	downloadChart(abnormalReturnByDemandTypeChart, fileName)
	// }

	return (
		<button
			className="flex items-center rounded-md bg-[#F1F1F5] p-2 text-neutral-500 hover:bg-neutral-200"
			// onClick={handleShare}
		>
			<IconShare />
		</button>
	)
}
