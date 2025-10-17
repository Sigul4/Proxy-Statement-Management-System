import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js"
import { AbnormalReturnByDemandTypeChart } from "./abnormal-return-by-demand-type-chart"
import AbnormalReturnByDemandTypeLegend from "./abnormal-return-by-demand-type-legend"
import AbnormalReturnByDemandTypeTabs from "./abnormal-return-by-demand-type-tabs"
import ShareAbnormalReturnByDemandTypeButton from "./share-abnormal-return-by-demand-type-button"

const data: ChartData = {
	labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
	datasets: [
		{
			label: "2-day return",
			data: [10, 5, 5, 5, 4, 4, 3, 1],
			backgroundColor: primaryColors[0],
			borderRadius: 4,
			barPercentage: 0.8,
			labels: {
				align: "center",
				color: "#fff"
			}
		},
		{
			label: "10-day return",
			data: [7, 3, 3, 4, 4, 2, 1, 1],
			backgroundColor: primaryColors[1],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "40-day return",
			data: [5, 2, 1, 0.2, 2, 1, 0.1, 0.1],
			backgroundColor: primaryColors[2],
			borderRadius: 4,
			barPercentage: 0.8
		}
	]
}

const tabs = ["Short-term", "Initial size of position", "Stake at filing date"]

export default function AbnormalReturnByDemandType() {
	return (
		<section className="flex w-full grow flex-col gap-10 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-8">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Abnormal return by demand type</p>
						<AbnormalReturnByDemandTypeTabs items={tabs} />
					</div>
					<div className="flex gap-6">
						<AbnormalReturnByDemandTypeLegend />
						<ShareAbnormalReturnByDemandTypeButton />
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<AbnormalReturnByDemandTypeChart data={data} />
			</div>
		</section>
	)
}
