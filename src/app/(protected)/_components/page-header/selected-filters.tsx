"use client"

import { useMemo } from "react"
import { useUniverseFiltersStore } from "../../universe/_store/use-universe-filters-store"
import SelectedFilterChip from "./selected-filter-chip"

export default function SelectedFilters() {
	const filters = useUniverseFiltersStore(state => state.filters)

	const selectedFilters = useMemo(() => {
		const selectedFilters = []

		if (filters.filingType) {
			selectedFilters.push(filters.filingType.toString())
		}
		if (filters.geography) {
			const selectedGeography = Object.entries(filters.geography)
				.filter(([, value]) => value)
				.map(([key]) => key)
			if (selectedGeography.length === 1) {
				selectedFilters.push(selectedGeography[0])
			} else if (selectedGeography.length > 1) {
				selectedFilters.push(selectedGeography.length + " countries")
			}
		}
		if (filters.period) {
			selectedFilters.push(filters.period.toString())
		}

		return selectedFilters
	}, [filters])

	return (
		<div className="flex gap-4">
			{selectedFilters.map(filter => (
				<SelectedFilterChip key={filter} label={filter} />
			))}
		</div>
	)
}
