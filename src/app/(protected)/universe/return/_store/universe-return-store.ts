import { Chart } from "chart.js"
import { create } from "zustand"

interface UniverseReturnStore {
	abnormalReturnByDemandTypeChart: Chart | null
	returnAnalyticsChart: Chart | null
	setAbnormalReturnByDemandTypeChart: (chart: Chart) => void
	setReturnAnalyticsChart: (chart: Chart) => void
}

export const useUniverseReturnStore = create<UniverseReturnStore>(set => ({
	abnormalReturnByDemandTypeChart: null,
	returnAnalyticsChart: null,
	setAbnormalReturnByDemandTypeChart: (chart: Chart) => set({ abnormalReturnByDemandTypeChart: chart }),
	setReturnAnalyticsChart: (chart: Chart) => set({ returnAnalyticsChart: chart })
}))
