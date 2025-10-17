export type ActivistItem = {
	id: number
	countryImageSrc: string
	activistImageSrc: string
	activistName: string
	name: string
	type: string
	focus: string
	campaigns: number
	aum: number
	trailing13dReturn1day: number
	trailing13dReturn1year: number
	trailing13dReturn3year: number
	trailing13dAbnormalReturn1year: number
	trailing13dAbnormalReturn3day: number
	portfolioFollowerAbnormalReturn1year: number
}

export type ActivistPortfolioItem = {
	reportingFor: string
	activistCik: string
	activistName: string
	activismFocus: string
	value: number
}
