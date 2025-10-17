import {
    AthenaClient,
    GetQueryExecutionCommand,
    GetQueryResultsCommand,
    StartQueryExecutionCommand
} from "@aws-sdk/client-athena"

const DATABASE = "networkBlog-monitor"
const OUTPUT_LOCATION = "s3://athena-query-results-2018-10-07-15-11-45-522"

export async function runQuery(athenaClient: AthenaClient, query: string) {
	try {
		// Iniciar la ejecución de la consulta
		const startQueryCommand = new StartQueryExecutionCommand({
			QueryString: query,
			QueryExecutionContext: { Database: DATABASE },
			ResultConfiguration: { OutputLocation: OUTPUT_LOCATION }
		})
		const startQueryResponse = await athenaClient.send(startQueryCommand)
		const queryExecutionId = startQueryResponse.QueryExecutionId

		const results = []
		let queryExecutionNextToken: string | undefined
		do {
			// Esperar a que la consulta se complete
			let queryExecution
			do {
				await new Promise(resolve => setTimeout(resolve, 500))
				const getQueryExecutionCommand = new GetQueryExecutionCommand({
					QueryExecutionId: queryExecutionId
				})
				queryExecution = await athenaClient.send(getQueryExecutionCommand)
			} while (queryExecution?.QueryExecution?.Status?.State === "RUNNING")

			if (queryExecution?.QueryExecution?.Status?.State !== "SUCCEEDED") {
				throw new Error(`Query failed: ${queryExecution?.QueryExecution?.Status?.StateChangeReason}`)
			}

			// Obtener los resultados
			const getQueryResultsCommand = new GetQueryResultsCommand({
				QueryExecutionId: queryExecutionId,
				NextToken: queryExecutionNextToken
			})
			const queryResults = await athenaClient.send(getQueryResultsCommand)
			const rows = queryResults.ResultSet?.Rows?.slice(1)
			const rowsData = rows?.map(x => x.Data) || []
			queryExecutionNextToken = queryResults.NextToken
			results.push(...rowsData)
		} while (queryExecutionNextToken)
		return results
	} catch (error) {
		console.error(error)
	}

	return null
}
