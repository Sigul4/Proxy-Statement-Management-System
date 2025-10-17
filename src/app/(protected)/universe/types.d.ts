export type CurrentFiltersSideMenuTab = "filters" | "savedFilters"

export type FilingTypeFilter = "13D" | "13G" | "Hybrid"

export interface GeographyFilter {
	us: boolean
	canada: boolean
	uk: boolean
	germany: boolean
	france: boolean
	japan: boolean
	korea: boolean
	australia: boolean
}

export type PeriodFilter = "30d" | "180d" | "YTD" | "1y" | "5y" | "10y" | "20y" | "all" | "custom"

export interface UniverseFilters {
	filingType?: FilingTypeFilter | null
	geography: GeographyFilter
	period: PeriodFilter
	activistType?: {}
	activistName?: {}
	focus?: {}
	targetSector?: {}
	targetMarketCap?: {}
	advisor?: {}
}

export interface SavedUniverseFilters {
	id: string
	date: Date
	filters: UniverseFilters
	results: number
}
