import { Chart } from "chart.js/auto"
import { create } from "zustand"
import type { CampaignsLaunchedFilter } from "../types"

interface UniverseActivityStore {
	isCampaignResultsInformationOpen: boolean
	campaignsLaunchedChart: Chart | null
	isAllActivitySituationsModalOpen: boolean
	campaignsLaunchedFilter: CampaignsLaunchedFilter
	setCampaignsLaunchedFilter: (filter: CampaignsLaunchedFilter) => void
	topTenCurrentTab: string
	setIsCampaignResultsInformationOpen: (isOpen: boolean) => void
	setCampaignsLaunchedChart: (chart: Chart) => void
	setIsAllActivitySituationsModalOpen: (isOpen: boolean) => void
	setTopTenCurrentTab: (tab: string) => void
}

export const useUniverseActivityStore = create<UniverseActivityStore>()(set => ({
	isCampaignResultsInformationOpen: true,
	campaignsLaunchedChart: null,
	isAllActivitySituationsModalOpen: false,
	campaignsLaunchedFilter: "All Time",
	setIsCampaignResultsInformationOpen: (isOpen: boolean) => set({ isCampaignResultsInformationOpen: isOpen }),
	setCampaignsLaunchedChart: (chart: Chart) => set({ campaignsLaunchedChart: chart }),
	setIsAllActivitySituationsModalOpen: (isOpen: boolean) => set({ isAllActivitySituationsModalOpen: isOpen }),
	setCampaignsLaunchedFilter: (filter: CampaignsLaunchedFilter) => set({ campaignsLaunchedFilter: filter }),
	topTenCurrentTab: "mostActive",
	setTopTenCurrentTab: (tab: string) => set({ topTenCurrentTab: tab })
}))
