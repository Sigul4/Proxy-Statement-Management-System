import { Chart } from "chart.js"
import { create } from "zustand"

interface PortfolioStore {
	topPerformingPortfoliosChart: Chart | null
	portfolioFollowerReturnChart: Chart | null
	portfolioCompositionAnalysis: Chart | null
	showAnormalPortfolioFollowerReturn: boolean
	setTopPerformingPortfoliosChart: (chart: Chart) => void
	setPortfolioFollowerReturnChart: (chart: Chart) => void
	setPorfolioCompositionAnalysis: (chart: Chart) => void
	setShowAnormalPortfolioFollowerReturn: (show: boolean) => void
}

export const usePorfolioStore = create<PortfolioStore>(set => ({
	topPerformingPortfoliosChart: null,
	portfolioFollowerReturnChart: null,
	portfolioCompositionAnalysis: null,
	showAnormalPortfolioFollowerReturn: false,
	setTopPerformingPortfoliosChart: (chart: Chart) => set({ topPerformingPortfoliosChart: chart }),
	setPortfolioFollowerReturnChart: (chart: Chart) => set({ portfolioFollowerReturnChart: chart }),
	setPorfolioCompositionAnalysis: (chart: Chart) => set({ portfolioCompositionAnalysis: chart }),
	setShowAnormalPortfolioFollowerReturn: (show: boolean) => set({ showAnormalPortfolioFollowerReturn: show })
}))
