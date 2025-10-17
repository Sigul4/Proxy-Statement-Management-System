export type CommonHoldingsColumnNames = [
	"accession_number",
	"filing_date",
	"reporting_for",
	"form",
	"activist_cik",
	"activist_name",
	"filing_url",
	"additional_info",
	"amendment_type",
	"name_of_issuer",
	"title_of_class",
	"cusip",
	"value",
	"amount",
	"share_type",
	"put_or_call",
	"other_manager",
	"ticker_sharadar",
	"activism_focus"
]

export type CommonHoldingsDataItem = {
	accession_number?: string
	filing_date?: string
	reporting_for?: string
	form?: string
	activist_cik?: string
	activist_name?: string
	filing_url?: string
	additional_info?: string
	amendment_type?: string
	name_of_issuer?: string
	title_of_class?: string
	cusip?: string
	value?: string
	amount?: string
	share_type?: string
	put_or_call?: string
	other_manager?: string
	ticker_sharadar?: string
	activism_focus?: string
}

export interface CommonHoldings {
	quarter: string
	company: string
	boxSize: number
	percentage: number
	value: number
}

export interface PortfolioQuarterOverQuarterComparisonItem {
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
