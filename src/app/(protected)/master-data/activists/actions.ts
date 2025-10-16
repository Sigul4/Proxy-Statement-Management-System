import { runQuery } from "@/utils/aws-utils"
import { AthenaClient } from "@aws-sdk/client-athena"
import { ActivistPortfolioItem } from "./types"

const ACCESS_KEY_ID: string = process.env.NEXT_PUBLIC_API_AWS_ACCESS_KEY_ID!
const SECRET_ACCESS_KEY: string = process.env.NEXT_PUBLIC_API_AWS_SECRET_ACCESS_KEY!

export async function getPortfolioData(activistName: string) {
	const query = `SELECT * FROM "networkBlog-monitor"."monitor_13f_quarterly_total_value" 
WHERE "activist_name" = '${activistName}'`

	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId: ACCESS_KEY_ID,
			secretAccessKey: SECRET_ACCESS_KEY
		}
	})

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData = data.slice(1).map(row => {
		return {
			reporting_for: row[0].VarCharValue!,
			activist_cik: row[1].VarCharValue!,
			activist_name: row[2].VarCharValue!,
			activism_focus: row[3].VarCharValue!,
			value: row[4].VarCharValue!
		}
	})

	const activistPortfolioItemsData: ActivistPortfolioItem[] = formattedData.map(row => {
		return {
			reportingFor: row.reporting_for,
			activistCik: row.activist_cik,
			activistName: row.activist_name,
			activismFocus: row.activism_focus,
			value: Number(row.value)
		}
	})

	const validData = activistPortfolioItemsData.filter(item => !!item.value)

	return validData
}
