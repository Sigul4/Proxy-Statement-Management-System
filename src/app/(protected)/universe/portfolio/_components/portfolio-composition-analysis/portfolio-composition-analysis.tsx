import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import PortfolioCompositionAnalysisChart from "./portfolio-composition-analysis-chart"
import PortfolioCompositionAnalysisLegend from "./portfolio-composition-analysis-legend"
import PortfolioCompositionAnalysisTabs from "./portfolio-composition-analysis-tabs"
import SharePortfolioCompositionAnalysis from "./share-portfolio-composition-analysis"

const data: ChartData = {
	labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
	datasets: [
		{
			label: "Energy",
			data: [1, 2, 4, 2, 1, 4, 2, 4, 2, 1],
			backgroundColor: primaryColors[0],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1
			}
		},
		{
			label: "Material",
			data: [8, 8, 8, 8, 3, 8, 8, 8, 8, 3],
			backgroundColor: primaryColors[1],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Industrials",
			data: [16, 21, 16, 22, 22, 16, 22, 16, 24, 24],
			backgroundColor: primaryColors[2],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Consumer Discretionary",
			data: [2, 3, 4, 5, 4, 3, 3, 4, 3, 4],
			backgroundColor: primaryColors[3],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Consumer Staples",
			data: [8, 14, 12, 8, 16, 8, 12, 11, 8, 16],
			backgroundColor: primaryColors[4],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Health Care",
			data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
			backgroundColor: primaryColors[5],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Financials",
			data: [42, 37, 42, 37, 37, 42, 34, 42, 34, 34],
			backgroundColor: primaryColors[6],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Information Technology",
			data: [12, 12, 8, 12, 14, 14, 16, 7, 16, 16],
			backgroundColor: primaryColors[7],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Communication Services",
			data: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			backgroundColor: primaryColors[8],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Utilities",
			data: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			backgroundColor: primaryColors[9],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		},
		{
			label: "Real Estate",
			data: [1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
			backgroundColor: primaryColors[10],
			borderRadius: 4,
			barThickness: 40,
			borderColor: "#fff",
			borderWidth: {
				top: 1,
				bottom: 1
			}
		}
	]
}

export default function PortfolioCompositionAnalysis() {
	const datasetsLabels = data.datasets.map(dataset => dataset.label) as string[]

	return (
		<section className="flex w-full grow flex-col gap-6 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-5">
					<div className="flex items-center gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Portfolio Composition Analysis</p>
						<PortfolioCompositionAnalysisTabs />
					</div>
					<div>
						<SharePortfolioCompositionAnalysis />
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<PortfolioCompositionAnalysisLegend items={datasetsLabels} />
				<PortfolioCompositionAnalysisChart data={data} />
			</div>
		</section>
	)
}
