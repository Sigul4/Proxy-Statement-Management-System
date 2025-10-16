import { Chart } from "chart.js/auto"
import { create } from "zustand"

interface CampaignDetailsStore {
	campaignEvolutionOwnershipChart: Chart | null
	setCampaignEvolutionOwnershipChart: (chart: Chart) => void
}

export const useCampaignDetailsStore = create<CampaignDetailsStore>(set => ({
	campaignEvolutionOwnershipChart: null,
	setCampaignEvolutionOwnershipChart: chart => set({ campaignEvolutionOwnershipChart: chart })
}))
