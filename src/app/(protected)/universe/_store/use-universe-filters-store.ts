import { create } from "zustand"
import { CurrentFiltersSideMenuTab, SavedUniverseFilters, UniverseFilters } from "../types"

const defaultState: {
	currentTab: CurrentFiltersSideMenuTab
	savedFilters: SavedUniverseFilters[]
	filters: UniverseFilters
	isOpen: boolean
} = {
	currentTab: "filters",
	savedFilters: [
		{
			id: "1",
			date: new Date(),
			filters: {
				activistName: "activistName",
				geography: {
					us: false,
					canada: false,
					uk: false,
					germany: false,
					france: true,
					japan: true,
					korea: true,
					australia: true
				},
				period: "all"
			},
			results: 112
		}
	],
	filters: {
		geography: {
			us: false,
			canada: false,
			uk: false,
			germany: false,
			france: true,
			japan: true,
			korea: true,
			australia: true
		},
		period: "all"
	},
	isOpen: false
}

interface UniverseFiltersStore {
	currentTab: CurrentFiltersSideMenuTab
	savedFilters: SavedUniverseFilters[]
	filters: UniverseFilters
	isOpen: boolean
	setCurrentTab: (currentTab: CurrentFiltersSideMenuTab) => void
	setSavedFilters: (savedFilters: SavedUniverseFilters[]) => void
	setFilters: (filters: UniverseFilters) => void
	setIsOpen: (isOpen: boolean) => void
	toggleIsOpen: () => void
}

export const useUniverseFiltersStore = create<UniverseFiltersStore>(set => ({
	...defaultState,

	setCurrentTab: currentTab => set({ currentTab }),
	setSavedFilters: savedFilters => set({ savedFilters }),
	setFilters: filters => set({ filters }),
	setIsOpen: isOpen => set({ isOpen }),
	toggleIsOpen: () => set(state => ({ isOpen: !state.isOpen }))
}))
