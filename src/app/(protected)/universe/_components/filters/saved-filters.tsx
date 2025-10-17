"use client"

import { useUniverseFiltersStore } from "../../_store/use-universe-filters-store"
import SavedFilterItem from "./saved-filter-item"

export default function SavedFilters() {
	const savedFilters = useUniverseFiltersStore(state => state.savedFilters)
	const setSavedFilters = useUniverseFiltersStore(state => state.setSavedFilters)

	function handleDeleteFilter(id: string) {
		setSavedFilters(savedFilters.filter(filter => filter.id !== id))
	}

	return (
		<div className="flex flex-col gap-3">
			{savedFilters.length === 0 && <p className="text-sm text-[#777]">No saved filters</p>}
			{savedFilters.map(filter => (
				<SavedFilterItem key={filter.id} savedFilter={filter} onDelete={() => handleDeleteFilter(filter.id)} />
			))}
		</div>
	)
}
