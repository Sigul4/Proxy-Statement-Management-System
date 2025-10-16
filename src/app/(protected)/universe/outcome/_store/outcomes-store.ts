import { Chart } from "chart.js/auto"
import { create } from "zustand"

interface OutcomesStore {
	outcomesChart: Chart | null
	proxyContestResultChart: Chart | null
	boardRepresentationDemandsChart: Chart | null
	boardSetsWonChart: Chart | null
	longTermAbnormalReturnByCampaignOutcomeChart: Chart | null
	setOutcomesChart: (chart: Chart) => void
	setProxyContestResultChart: (chart: Chart) => void
	setBoardRepresentationDemandsChart: (chart: Chart) => void
	setBoardSetsWonChart: (chart: Chart) => void
	setLongTermAbnormalReturnByCampaignOutcomeChart: (chart: Chart) => void
}

export const useOutcomesStore = create<OutcomesStore>(set => ({
	outcomesChart: null,
	proxyContestResultChart: null,
	boardRepresentationDemandsChart: null,
	boardSetsWonChart: null,
	longTermAbnormalReturnByCampaignOutcomeChart: null,
	setOutcomesChart: chart => set({ outcomesChart: chart }),
	setProxyContestResultChart: chart => set({ proxyContestResultChart: chart }),
	setBoardRepresentationDemandsChart: chart => set({ boardRepresentationDemandsChart: chart }),
	setBoardSetsWonChart: chart => set({ boardSetsWonChart: chart }),
	setLongTermAbnormalReturnByCampaignOutcomeChart: chart => set({ longTermAbnormalReturnByCampaignOutcomeChart: chart })
}))
