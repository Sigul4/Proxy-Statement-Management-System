import AbnormalReturnByDemandType from "./_components/abnormal-return-by-demand-type/abnormal-return-by-demand-type"
import CampaignInvestmentReturns from "./_components/campaign-investment-returns/campaign-investment-returns"
import InformationReturn from "./_components/information-return"
import ReturnAnalytics from "./_components/return-analytics/return-analytics"
import { TopPerformingActivists } from "./_components/top-performing-activists/top-performing-activists"
import { TopPerformingCampaigns } from "./_components/top-performing-campaigns/top-performing-campaigns"

export default function UniverseReturnPage() {
	return (
		<div className="flex flex-col gap-8">
			<InformationReturn />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
				<TopPerformingCampaigns />
				<TopPerformingActivists />
			</div>
			<CampaignInvestmentReturns />
			<ReturnAnalytics />
			<AbnormalReturnByDemandType />
		</div>
	)
}
