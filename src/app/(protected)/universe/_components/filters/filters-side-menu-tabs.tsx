"use client"

import { cn } from "@/lib/utils"
import { useUniverseFiltersStore } from "../../_store/use-universe-filters-store"
import { CurrentFiltersSideMenuTab } from "../../types"

const FILTERS_TABS: CurrentFiltersSideMenuTab[] = ["filters", "savedFilters"]

export default function FiltersSideMenuTabs() {
	const currentTab = useUniverseFiltersStore(state => state.currentTab)
	const setCurrentTab = useUniverseFiltersStore(state => state.setCurrentTab)

	function handleClickTab(tab: CurrentFiltersSideMenuTab) {
		setCurrentTab(tab)
	}

	return (
		<header className="flex gap-6">
			{FILTERS_TABS.map(tab => (
				<button
					key={tab}
					className={cn(
						"mb-7 cursor-pointer text-lg font-semibold capitalize tracking-widest text-[#1B1B1B]",
						currentTab === tab ? "underline underline-offset-4" : "text-[#777]"
					)}
					onClick={() => handleClickTab(tab)}
				>
					{tab}
				</button>
			))}
		</header>
	)
}
