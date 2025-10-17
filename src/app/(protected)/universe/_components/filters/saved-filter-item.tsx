"use client"

import { useMemo } from "react"
import { SavedUniverseFilters } from "../../types"
import ButtonFiltersDelete from "./button-filters-delete"

function formatDate(date: Date) {
	const day = String(date.getDate()).padStart(2, "0")
	const month = String(date.getMonth() + 1).padStart(2, "0")
	const year = String(date.getFullYear()).slice(-2)
	const hours = String(date.getHours()).padStart(2, "0")
	const minutes = String(date.getMinutes()).padStart(2, "0")

	return `${day}/${month}/${year} | ${hours}:${minutes}`
}

export default function SavedFilterItem({
	savedFilter,
	onDelete
}: {
	savedFilter: SavedUniverseFilters
	onDelete: (id: string) => void
}) {
	const content = useMemo(() => {
		const { activistName, geography, period } = savedFilter.filters
		const selectedGeography = Object.entries(geography)
			.filter(([, value]) => value)
			.map(([key]) => key)
			.join(", ")

		return `${selectedGeography} | ${period}`
	}, [savedFilter.filters])

	return (
		<article className="flex flex-col gap-4 rounded-lg bg-[#F1F1F5] px-3 py-2">
			<header className="flex justify-between">
				<div className="flex items-center gap-2">
					<span className="text-micro">{formatDate(savedFilter.date)}</span>
				</div>
				<ButtonFiltersDelete onClick={() => onDelete(savedFilter.id)} />
			</header>
			<p className="text-sm">{content}</p>
			<footer className="border-t pt-3 text-micro">
				{savedFilter.results} Results <span className="font-semibold">(0 New)</span>
			</footer>
		</article>
	)
}
