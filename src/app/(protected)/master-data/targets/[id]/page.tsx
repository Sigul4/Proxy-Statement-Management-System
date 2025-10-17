import WishlistButton from "@/components/wishlist-button"
import { notFound } from "next/navigation"
import BackButton from "../../_components/back-button"
import MoreOptionsButton from "../../_components/more-options-button"
import { TARGET_DATA } from "../data"
import Details from "./_components/details/details"
import InsiderTransactions from "./_components/insider-transactions/insider-transactions"
import KeyValuationMetrics from "./_components/key-valuation-metrics/key-valuation-metrics"
import PerformanceVsPeers from "./_components/performance-vs-peers/performance-vs-peers"
import PreviousCampaignsOnTarget from "./_components/previous-campaigns-on-target/previous-campaigns-on-target"
import ReferenceToCampaignsInSectorPeers from "./_components/reference-to-campaigns-in-sector-peers/reference-to-campaigns-in-sector-peers"
import SummaryKeyFinancials from "./_components/summary-key-financials/summary-key-financials"
import TopInstitutionalInvestors from "./_components/top-institutional-investors/top-institutional-investors"
import VulnerabilityHeatmap from "./_components/vulnerability-heatmap/vulnerability-heatmap"

interface Props {
	params: {
		id: number
	}
}

export default function MasterDataTargetsPage({ params: { id } }: Props) {
	const item = TARGET_DATA.find(item => item.id === Number(id))
	if (!item) return notFound()

	const { ticker } = item

	return (
		<div className="flex flex-col gap-8">
			<header className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-8">
					<BackButton href="/master-data/targets" />
					<h2 className="text-3xl">{ticker}</h2>
				</div>
				<div className="flex items-center gap-5">
					<MoreOptionsButton />
					<WishlistButton />
				</div>
			</header>
			<div className="grid grid-cols-2 gap-4">
				<Details item={item} />
				<VulnerabilityHeatmap />
			</div>
			<PreviousCampaignsOnTarget />
			<PerformanceVsPeers />
			<div className="grid grid-cols-2 gap-4">
				<SummaryKeyFinancials />
				<KeyValuationMetrics />
			</div>
			<InsiderTransactions />
			<TopInstitutionalInvestors />
			<ReferenceToCampaignsInSectorPeers />
		</div>
	)
}
