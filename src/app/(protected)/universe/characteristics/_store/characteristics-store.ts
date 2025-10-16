import { Chart } from "chart.js/auto"
import { create } from "zustand"

interface CharacteristicsStore {
	positionMetricsChart: Chart | null
	targetCharacteristicsChart: Chart | null
	lengthOfCampaignsChart: Chart | null
	setPositionMetricsChart: (chart: Chart) => void
	setTargetCharacteristicsChart: (chart: Chart) => void
	setLengthOfCampaignsChart: (chart: Chart) => void
}

export const useCharacteristicsStore = create<CharacteristicsStore>()(set => ({
	positionMetricsChart: null,
	targetCharacteristicsChart: null,
	lengthOfCampaignsChart: null,
	setPositionMetricsChart: (chart: Chart) => set({ positionMetricsChart: chart }),
	setTargetCharacteristicsChart: (chart: Chart) => set({ targetCharacteristicsChart: chart }),
	setLengthOfCampaignsChart: (chart: Chart) => set({ lengthOfCampaignsChart: chart })
}))
