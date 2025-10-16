import { runQuery } from "@/utils/aws-utils"
import { AthenaClient } from "@aws-sdk/client-athena"
import { FilingTypeFilter } from "../types"
import {
    ActivitySituation,
    CampaignsLaunched,
    SizeAndReturnOfCampaign,
    SizeAndReturnOfCampaignDetailed,
    TopTenLargestCampaigns,
    TopTenMostActive
} from "./types"

const accessKeyId: string = process.env.NEXT_PUBLIC_API_AWS_ACCESS_KEY_ID!
const secretAccessKey: string = process.env.NEXT_PUBLIC_API_AWS_SECRET_ACCESS_KEY!

export async function getActivitySituations() {
	const query = 'SELECT * FROM "monitor_13dg_activists_situation"'

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData: ActivitySituation[] = data.map(x => {
		return {
			filingDate: x[0]?.VarCharValue || "",
			form: x[1]?.VarCharValue || "",
			activistName: x[2]?.VarCharValue || "",
			targetCompanyName: x[3]?.VarCharValue || "",
			activistSituationText: x[4]?.VarCharValue || "",
			whenFiled: x[5]?.VarCharValue || ""
		}
	})

	return formattedData
}

export async function getCampaignsLaunched() {
	const query = 'SELECT * FROM "monitor_13dg_filings_count"'

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData: CampaignsLaunched[] = data.map(x => {
		return {
			filingDate: x[0]?.VarCharValue || "",
			activistName: x[1]?.VarCharValue || "",
			targetCompanyName: x[2]?.VarCharValue || "",
			campaignNo: x[3]?.VarCharValue || "",
			primaryFormType: x[4]?.VarCharValue || "",
			ticker: x[5]?.VarCharValue || "",
			numFilings: parseInt(x[6]?.VarCharValue || "0", 10)
		}
	})

	// Group by year
	const years = formattedData.map(x => new Date(x.filingDate).getFullYear())
	const uniqueYears = Array.from(new Set(years))
	const groupedData = uniqueYears.map(year => {
		const data = formattedData.filter(x => new Date(x.filingDate).getFullYear() === year)
		return { year, data }
	})

	// Group data every year by primary form type
	const groupedDataByPrimaryFormType = groupedData.map(x => {
		const primaryFormTypes = x.data.map(y => y.primaryFormType)
		const uniquePrimaryFormTypes = Array.from(new Set(primaryFormTypes))
		const data = uniquePrimaryFormTypes.map(primaryFormType => {
			const primaryFormTypeData = x.data.filter(y => y.primaryFormType === primaryFormType)
			return { primaryFormType, count: primaryFormTypeData.length }
		})
		return { year: x.year, data }
	})

	// Sort data by year
	const sortedDataByYear = groupedDataByPrimaryFormType.sort((a, b) => a.year - b.year)

	return sortedDataByYear
}

export async function getTop10() {
	const TOP_10_FORM_FILTER_TYPE: FilingTypeFilter = "13D"

	const query = `
		WITH base AS (
			SELECT
					year(first_filing_date) AS filing_year,
					activist_name,
					primary_form_type, 
					SUM(num_filings) as num_filings
			FROM monitor_13dg_filings_count
			GROUP BY year(first_filing_date), primary_form_type, activist_name
		),
		avg_counts AS (
			SELECT
					filing_year,
					primary_form_type,
					activist_name,
					num_filings,
					CAST(ROUND(AVG(num_filings) OVER (
							PARTITION BY primary_form_type, activist_name
							ORDER BY filing_year
							RANGE BETWEEN 4 PRECEDING AND CURRENT ROW
					), 0) as integer) AS five_year_average
			FROM base
		),
		rolling_counts AS (
			SELECT
					activist_name,
					primary_form_type, 
					SUM(num_filings) AS one_year_rolling_count
			FROM monitor_13dg_filings_count
			WHERE first_filing_date >= current_date - INTERVAL '1' YEAR
			GROUP BY primary_form_type, activist_name
		)

		SELECT rc.activist_name, rc.primary_form_type, rc.one_year_rolling_count, ac.five_year_average
		FROM rolling_counts rc
		JOIN (
			SELECT activist_name, primary_form_type, five_year_average 
			FROM avg_counts
			WHERE filing_year = year(current_date)
		) AS ac 
		ON rc.activist_name = ac.activist_name 
		AND rc.primary_form_type = ac.primary_form_type
	`

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData: TopTenMostActive[] = data.map(x => {
		return {
			activistName: x[0]?.VarCharValue || "",
			primaryFormType: x[1]?.VarCharValue || "",
			oneYearRollingCount: parseInt(x[2]?.VarCharValue || "0", 10),
			fiveYearAverage: parseInt(x[3]?.VarCharValue || "0", 10)
		}
	})

	const filteredData = formattedData.filter(x => x.primaryFormType === TOP_10_FORM_FILTER_TYPE)

	const sortedData = filteredData.sort((a, b) => b.oneYearRollingCount - a.oneYearRollingCount)

	return sortedData.slice(0, 10)
}

export async function getTop10LargestCampaigns() {
	const query = `
		SELECT DISTINCT
			"activist_name",
			"target_company_name",
			"campaign_no",
			"first_filing_date",
			"first_filing_position",
			"first_filing_pct_of_class"
		FROM "networkBlog-monitor"."monitor_13dg_return"
		WHERE "first_filing_date" >= current_date - INTERVAL '1' YEAR
		ORDER BY "first_filing_position" DESC
		LIMIT 10;
	`

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData: TopTenLargestCampaigns[] = data.map(x => {
		return {
			activistName: x[0]?.VarCharValue || "",
			targetCompanyName: x[1]?.VarCharValue || "",
			campaignNo: x[2]?.VarCharValue || "",
			firstFilingDate: x[3]?.VarCharValue || "",
			firstFilingPosition: parseInt(x[4]?.VarCharValue || "0", 10),
			firstFilingPctOfClass: x[5]?.VarCharValue || ""
		}
	})

	console.log(formattedData)

	return formattedData
}

export async function getSizeAndReturnOfCampaignData() {
	const query = `
		SELECT DISTINCT
			"primary_form_type",
			"campaign_no",
			"activist_name",
			"target_company_name",
			"ticker",
			"first_filing_date",
			"last_filing_date",
			"first_filing_market_cap",
			"first_filing_position",
			"return",
			"abnormal_return"
		FROM "networkBlog-monitor"."monitor_13dg_return";`

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData: SizeAndReturnOfCampaign[] = data.map(x => {
		return {
			primaryFormType: x[0]?.VarCharValue || "",
			campaignNo: x[1]?.VarCharValue || "",
			activistName: x[2]?.VarCharValue || "",
			targetCompanyName: x[3]?.VarCharValue || "",
			ticker: x[4]?.VarCharValue || "",
			firstFilingDate: x[5]?.VarCharValue || "",
			lastFilingDate: x[6]?.VarCharValue || "",
			firstFilingMarketCap: x[7]?.VarCharValue || "",
			firstFilingPosition: Number(x[8]?.VarCharValue) || 0,
			return: Number(x[9]?.VarCharValue) * 100 || 0,
			abnormalReturn: Number(x[10]?.VarCharValue) || 0
		}
	})

	return formattedData
}

export async function getSizeAndReturnOfCampaignDetailedData() {
	const query = `
		SELECT DISTINCT
			"primary_form_type",
			"campaign_no",
			"activist_name",
			"target_company_name",
			"ticker",
			"first_filing_date",
			"last_filing_date",
			"first_filing_pct_of_class",
			"return",
			"abnormal_return"
		FROM "networkBlog-monitor"."monitor_13dg_return"`

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData: SizeAndReturnOfCampaignDetailed[] = data.map(x => {
		return {
			primaryFormType: x[0]?.VarCharValue || "",
			campaignNo: x[1]?.VarCharValue || "",
			activistName: x[2]?.VarCharValue || "",
			targetCompanyName: x[3]?.VarCharValue || "",
			ticker: x[4]?.VarCharValue || "",
			firstFilingDate: x[5]?.VarCharValue || "",
			lastFilingDate: x[6]?.VarCharValue || "",
			firstFilingPctOfClass: x[7]?.VarCharValue || "",
			return: Number(x[8]?.VarCharValue) || 0,
			abnormalReturn: Number(x[9]?.VarCharValue) || 0
		}
	})

	return formattedData
}
