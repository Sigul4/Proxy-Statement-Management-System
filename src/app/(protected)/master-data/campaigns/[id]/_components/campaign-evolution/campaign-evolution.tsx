import { SectionCard } from "@/components/section-card"
import CampaignEvolutionChart from "./campaign-evolution-chart"
import CampaignEvolutionOwnership from "./campaign-evolution-ownership"
import CampaignEvolutionScrollerChart from "./campaign-evolution-scroller-chart"
import CampaignEvolutionTicker from "./campaign-evolution-ticker"

export default function CampaignEvolution() {
	return (
		<SectionCard title="Campaign evolution">
			<div className="flex flex-col gap-6">
				<CampaignEvolutionTicker />
				<CampaignEvolutionChart />
				<CampaignEvolutionScrollerChart />
				<CampaignEvolutionOwnership />
			</div>
		</SectionCard>
	)
}
