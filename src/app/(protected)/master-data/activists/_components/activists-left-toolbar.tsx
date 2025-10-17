"use client"

import SearchButton from "@/components/search-button"

export default function ActivistsLeftToolbar() {
	function handleSearch() {
		console.log("search")
	}

	return (
		<div>
			<SearchButton onSearch={handleSearch} />
		</div>
	)
}
