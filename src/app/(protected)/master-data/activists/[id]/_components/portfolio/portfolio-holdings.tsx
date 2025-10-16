import { getPortfolioData } from "../../../actions"
import PortfolioHoldingsChart from "./portfolio-holdings-chart"

interface Props {
	activistName: string
}

export default async function PortfolioHoldings({ activistName }: Props) {
	const data = await getPortfolioData(activistName)

	return <PortfolioHoldingsChart data={data} />
}
