"use client"

import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import TopPerformingPortfoliosChart from "./top-performing-portfolios-chart"

const labels = [
	"Elliot Management",
	"Icahn",
	"Corvex",
	"Third Point",
	"Pershing Square",
	"Caligan Partners",
	"Legion Partners",
	"Impactive Capital"
]

const data: ChartData = {
	labels,
	datasets: [
		{
			data: [
				[5, 20],
				[4, 10],
				[4.5, 8],
				[4, 8],
				[4, 7],
				[3, 6],
				[2, 4],
				[1, 3]
			],
			barPercentage: 0.7,
			borderWidth: {
				left: 0,
				right: 0,
				bottom: 4,
				top: 4
			},
			gradient: {
				backgroundColor: {
					axis: "y",
					colors: {
						0: "#89C5D460",
						100: "#3A5A6660"
					}
				},
				borderColor: {
					axis: "y",
					colors: {
						0: primaryColors[1],
						1: primaryColors[0]
					}
				}
			},
			borderSkipped: false
		}
	]
}

export default function TopPerformingPortfolios() {
	return (
		<section className="flex w-full grow flex-col gap-6 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-5">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Top-performing Porfolios</p>
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<TopPerformingPortfoliosChart data={data} />
			</div>
		</section>
	)
}
