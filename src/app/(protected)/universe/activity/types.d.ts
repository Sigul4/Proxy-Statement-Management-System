export interface ActivitySituation {
	filingDate: string
	form: string
	activistName: string
	targetCompanyName: string
	activistSituationText: string
	whenFiled: string
}

export interface CampaignsLaunched {
	filingDate: string
	activistName: string
	targetCompanyName: string
	campaignNo: string
	primaryFormType: string
	ticker: string
	numFilings: number
}

export interface TopTenMostActive {
	activistName: string
	primaryFormType: string
	oneYearRollingCount: number
	fiveYearAverage: number
}

export interface TopTenLargestCampaigns {
	activistName: string
	targetCompanyName: string
	campaignNo: string
	firstFilingDate: string
	firstFilingPosition: number
	firstFilingPctOfClass: string
}

export interface SizeAndReturnOfCampaign {
	primaryFormType: string
	campaignNo: string
	activistName: string
	targetCompanyName: string
	ticker: string
	firstFilingDate: string
	lastFilingDate: string
	firstFilingMarketCap: string
	firstFilingPosition: number
	return: number
	abnormalReturn: number
}

export interface SizeAndReturnOfCampaignDetailed {
	primaryFormType: string
	campaignNo: string
	activistName: string
	targetCompanyName: string
	ticker: string
	firstFilingDate: string
	lastFilingDate: string
	firstFilingPctOfClass: string
	return: number
	abnormalReturn: number
}

export type TopTenTabs = "mostActive" | "largestCampaigns"

export type CampaignsLaunchedFilter = "All Time" | "Monthly" | "Daily" | "Custom data range"
