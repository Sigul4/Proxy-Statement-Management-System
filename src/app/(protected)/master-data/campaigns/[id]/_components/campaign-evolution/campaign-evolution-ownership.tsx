import CampaignEvolutionOwnershipChart from "./campaign-evolution-ownership-chart"

export default function CampaignEvolutionOwnership() {
	return (
		<section className="flex flex-col gap-6">
			<header>
				<h3 className="text-lg font-semibold text-gray-700">Ownership</h3>
			</header>
			<CampaignEvolutionOwnershipChart />
		</section>
	)
}
