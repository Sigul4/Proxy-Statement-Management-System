export interface QuarterOverQuarterComparisonItem {
	ticker: string
	companyName: string
	class: string
	cusip: string
	optionType: string
	sharesFirstQuarter: number
	sharesLastQuarter: number
	sharesDifference: number
	sharesChange: string
	valueFirstQuarter: number
	valueLastQuarter: number
	valueDifference: number
	valueChange: string
}

export interface QuarterOverQuarterComparisonHeader {
	accessorKey?: string
	id?: string
	columns?: QuarterOverQuarterComparisonHeader[]
}
