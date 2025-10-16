"use client"

import { useUniverseFiltersStore } from "../../universe/_store/use-universe-filters-store"
import { IconFilter } from "./icon-filter"

export default function FiltersButton() {
	const isOpen = useUniverseFiltersStore(state => state.isOpen)
	const setIsOpen = useUniverseFiltersStore(state => state.setIsOpen)

	function handleClick() {
		setIsOpen(!isOpen)
	}

	return (
		<button
			className="flex items-center rounded-md bg-[#F1F1F5] p-2 text-neutral-500 hover:bg-neutral-200"
			onClick={handleClick}
		>
			<IconFilter />
		</button>
	)
}
