import { runQuery } from "@/utils/aws-utils"
import { AthenaClient } from "@aws-sdk/client-athena"
import { CommonHoldings } from "./types"

const accessKeyId: string = process.env.NEXT_PUBLIC_API_AWS_ACCESS_KEY_ID!
const secretAccessKey: string = process.env.NEXT_PUBLIC_API_AWS_SECRET_ACCESS_KEY!

export async function getCommonHoldingsData() {
	const client = new AthenaClient({
		region: "eu-central-1",
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	})

	const query = `
		SELECT "reporting_for", "name_of_issuer", SUM("value") as "value",
		MAX("name_of_issuer_count") as "name_of_issuer_count",
		MAX("pct_activist_holding_position") as "pct_activist_holding_position"
		FROM "networkBlog-monitor"."monitor_13f_common_holdings"
		WHERE "reporting_for" = (SELECT MAX("reporting_for") FROM "monitor_13f_common_holdings") 
		GROUP BY "reporting_for", "name_of_issuer"
	`

	const results = await runQuery(client, query)
	if (!results) return []

	const data = results.filter(x => !!x)
	if (!data || data.length === 0) return []

	const formattedData = data.slice(1).map(row => {
		return {
			reporting_for: row[0].VarCharValue!,
			name_of_issuer: row[1].VarCharValue!,
			value: row[2].VarCharValue!,
			name_of_issuer_count: row[3].VarCharValue!,
			pct_activist_holding_position: row[4].VarCharValue!
		}
	})

	const treemapData: CommonHoldings[] = formattedData
		.map(row => {
			return {
				quarter: row.reporting_for,
				company: row.name_of_issuer,
				boxSize: Number(row.name_of_issuer_count),
				percentage: Number(row.pct_activist_holding_position) * 100,
				value: Number(row.value)
			}
		})
		.sort((a, b) => b.percentage - a.percentage)
		.slice(0, 100)

	return treemapData
}
