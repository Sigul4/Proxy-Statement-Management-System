"use client"

import FiltersButton from "@/app/(protected)/_components/page-header/filters-button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useUniverseFiltersStore } from "../../_store/use-universe-filters-store"
import FiltersForm from "./filters-form"
import FiltersSideMenuTabs from "./filters-side-menu-tabs"
import SavedFilters from "./saved-filters"

export default function FiltersSideMenu() {
	const isOpen = useUniverseFiltersStore(state => state.isOpen)
	const setIsOpen = useUniverseFiltersStore(state => state.setIsOpen)
	const currentTab = useUniverseFiltersStore(state => state.currentTab)

	return (
		<>
			<FiltersButton />
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent className="overflow-y-auto">
					<FiltersSideMenuTabs />
					{currentTab === "filters" && <FiltersForm />}
					{currentTab === "savedFilters" && <SavedFilters />}
				</SheetContent>
			</Sheet>
		</>
	)
}
