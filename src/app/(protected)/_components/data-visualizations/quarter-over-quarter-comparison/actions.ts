import { runQuery } from "@/utils/aws-utils"
import { AthenaClient } from "@aws-sdk/client-athena"
import { QuarterOverQuarterComparisonItem } from "./types"

const accessKeyId: string = process.env.NEXT_PUBLIC_API_AWS_ACCESS_KEY_ID!
const secretAccessKey: string = process.env.NEXT_PUBLIC_API_AWS_SECRET_ACCESS_KEY!

export async function getOverQuarterOverQuarterComparisonData(activistName?: string) {
	let query = ""

	if (activistName) {
		query = `
			WITH 
			base as (
				SELECT
					ticker_sharadar,
					name_of_issuer,
					title_of_class,
					cusip,
					share_type,
					put_or_call
				FROM monitor_13f_qoq
				WHERE activist_name = ${activistName} AND reporting_for = date('2024-03-31')
				UNION
				SELECT
					ticker_sharadar,
					name_of_issuer,
					title_of_class,
					cusip,
					share_type,
					put_or_call
				FROM monitor_13f_qoq
				WHERE activist_name = ${activistName}
				AND reporting_for = date('2023-12-31')
			),
			cq AS (
				SELECT
					cusip,
					put_or_call,
					shrs_or_prn_amt,
					value
				FROM monitor_13f_qoq
				WHERE activist_name = ${activistName}
				AND reporting_for = date('2024-03-31')
			),
			pq AS (
				SELECT
					cusip,
					put_or_call,
					shrs_or_prn_amt,
					value
				FROM monitor_13f_qoq
				WHERE activist_name = ${activistName}
				AND reporting_for = date('2023-12-31')
			)
			SELECT
				base.*,
				COALESCE(cq.shrs_or_prn_amt, 0) as shrs_or_prn_amt_q1_2024,
				COALESCE(pq.shrs_or_prn_amt, 0) as shrs_or_prn_amt_q4_2023,
				(COALESCE(cq.shrs_or_prn_amt, 0) - COALESCE(pq.shrs_or_prn_amt, 0)) AS shares_or_principal_diff,
				CASE 
					WHEN COALESCE(pq.shrs_or_prn_amt, 0) = 0 THEN 'NEW'
					ELSE CONCAT(
					CAST(ROUND((CAST(COALESCE(cq.shrs_or_prn_amt, 0) as DOUBLE) - CAST(COALESCE(pq.shrs_or_prn_amt, 0) as DOUBLE)) / CAST(COALESCE(pq.shrs_or_prn_amt, 0) as DOUBLE) * 100, 2) as VARCHAR), '%')
				END AS shares_or_principal_chg_pct,
				COALESCE(cq.value, 0) as value_q1_2024, 
				COALESCE(pq.value, 0) as value_q4_2023,
				(COALESCE(cq.value, 0) - COALESCE(pq.value, 0)) AS value_diff,
				CASE 
					WHEN COALESCE(pq.shrs_or_prn_amt, 0) = 0 THEN 'NEW'
					ELSE CONCAT(
					CAST(ROUND((CAST(COALESCE(cq.value, 0) as DOUBLE) - CAST(COALESCE(pq.value, 0) as DOUBLE)) / CAST(COALESCE(pq.value, 0) as DOUBLE) * 100, 2) as VARCHAR), '%')
				END AS value_chg_pct
			FROM base
			LEFT JOIN cq
				ON base.cusip = cq.cusip and COALESCE(base.put_or_call, 'normal') = COALESCE(cq.put_or_call, 'normal')
			LEFT JOIN pq
				ON base.cusip = pq.cusip and COALESCE(base.put_or_call, 'normal') = COALESCE(pq.put_or_call, 'normal')
			ORDER BY value_q1_2024 DESC;
		`
	} else {
		query = `
			WITH 
			base as (
				SELECT
					ticker_sharadar,
					name_of_issuer,
					title_of_class,
					cusip,
					share_type,
					put_or_call
				FROM monitor_13f_qoq
				WHERE reporting_for = date('2024-03-31')
				UNION
				SELECT
					ticker_sharadar,
					name_of_issuer,
					title_of_class,
					cusip,
					share_type,
					put_or_call
				FROM monitor_13f_qoq
				WHERE reporting_for = date('2023-12-31')
			),
			cq AS (
				SELECT
					cusip,
					put_or_call,
					SUM(shrs_or_prn_amt) as shrs_or_prn_amt,
					SUM(value) as value
				FROM monitor_13f_qoq
				WHERE reporting_for = date('2024-03-31')
				GROUP BY cusip, put_or_call
			),
			pq AS (
				SELECT
					cusip,
					put_or_call,
					SUM(shrs_or_prn_amt) as shrs_or_prn_amt,
					SUM(value) as value
				FROM monitor_13f_qoq
				WHERE reporting_for = date('2023-12-31')
				GROUP BY cusip, put_or_call
			)
			SELECT
				base.*,
				COALESCE(cq.shrs_or_prn_amt, 0) as shrs_or_prn_amt_q1_2024,
				COALESCE(pq.shrs_or_prn_amt, 0) as shrs_or_prn_amt_q4_2023,
				(COALESCE(cq.shrs_or_prn_amt, 0) - COALESCE(pq.shrs_or_prn_amt, 0)) AS shares_or_principal_diff,
				CASE 
					WHEN COALESCE(pq.shrs_or_prn_amt, 0) = 0 THEN 'NEW'
					ELSE CONCAT(
					CAST(ROUND((CAST(COALESCE(cq.shrs_or_prn_amt, 0) as DOUBLE) - CAST(COALESCE(pq.shrs_or_prn_amt, 0) as DOUBLE)) / CAST(COALESCE(pq.shrs_or_prn_amt, 0) as DOUBLE) * 100, 2) as VARCHAR), '%')
				END AS shares_or_principal_chg_pct,
				COALESCE(cq.value, 0) as value_q1_2024, 
				COALESCE(pq.value, 0) as value_q4_2023,
				(COALESCE(cq.value, 0) - COALESCE(pq.value, 0)) AS value_diff,
				CASE 
					WHEN COALESCE(pq.shrs_or_prn_amt, 0) = 0 THEN 'NEW'
					ELSE CONCAT(
					CAST(ROUND((CAST(COALESCE(cq.value, 0) as DOUBLE) - CAST(COALESCE(pq.value, 0) as DOUBLE)) / CAST(COALESCE(pq.value, 0) as DOUBLE) * 100, 2) as VARCHAR), '%')
				END AS value_chg_pct
			FROM base
			LEFT JOIN cq
					ON base.cusip = cq.cusip and COALESCE(base.put_or_call, 'normal') = COALESCE(cq.put_or_call, 'normal')
			LEFT JOIN pq
					ON base.cusip = pq.cusip and COALESCE(base.put_or_call, 'normal') = COALESCE(pq.put_or_call, 'normal')
			ORDER BY name_of_issuer ASC;
		`
	}

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

	const formattedData: QuarterOverQuarterComparisonItem[] = data.map(row => {
		return {
			ticker: row[0].VarCharValue!,
			companyName: row[1].VarCharValue!,
			class: row[2].VarCharValue!,
			cusip: row[3].VarCharValue!,
			optionType: row[5].VarCharValue!,
			sharesFirstQuarter: Number(row[6].VarCharValue!),
			sharesLastQuarter: Number(row[7].VarCharValue!),
			sharesDifference: Number(row[8].VarCharValue!),
			sharesChange: row[9].VarCharValue!,
			valueFirstQuarter: Number(row[10].VarCharValue!),
			valueLastQuarter: Number(row[11].VarCharValue!),
			valueDifference: Number(row[12].VarCharValue!),
			valueChange: row[13].VarCharValue!
		}
	})

	return formattedData
}
