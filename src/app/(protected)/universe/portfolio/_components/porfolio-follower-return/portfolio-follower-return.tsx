import { ChartData } from "chart.js/auto"
import PortfolioFollowerReturnChart from "./portfolio-follower-return-chart"
import SharePortfolioFollowerReturnButton from "./share-portfolio-follower-return-button"

const data: ChartData = {
	datasets: [
		{
			type: "barWithErrorBars",
			data: [
				{
					y: 4,
					yMin: 1,
					yMax: 6
				},
				{
					y: 2,
					yMin: 1,
					yMax: 4
				}
			]
		}
	]
}

export default function PortfolioFollowerReturn() {
	return (
		<section className="flex w-full grow flex-col gap-6 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-5">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Portfolio Follower Return</p>
					</div>
				</div>
				<div className="flex flex-grow gap-5">
					<SharePortfolioFollowerReturnButton />
				</div>
			</header>
			<div className="w-full">
				<PortfolioFollowerReturnChart />
			</div>
		</section>
	)
}
