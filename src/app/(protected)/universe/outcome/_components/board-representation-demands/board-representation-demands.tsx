import ChartLegendItem from "@/components/chart-legend-item"
import { SectionCard } from "@/components/section-card"
import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import BoardRepresentationDemandsChart from "./board-representation-demands-chart"
import BoardRepresentationDemansToolbar from "./board-representation-demans-toolbar"

const data: ChartData = {
	labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
	datasets: [
		{
			label: "Resolve via settlement",
			data: [10, 20, 17, 20, 10, 10, 10, 9, 9, 9, 2],
			backgroundColor: primaryColors[0],
			borderRadius: 4
		},
		{
			label: "Resolve via vote",
			data: [10, 15, 14, 10, 7, 7, 9, 9, 4, 2, 2],
			backgroundColor: primaryColors[1],
			borderRadius: 4
		}
	]
}

export default function BoardRepresentationDemands() {
	return (
		<SectionCard
			id="outcome-of-board-representation-demands"
			title="Outcome of Board repesentation demands"
			toolbar={<BoardRepresentationDemansToolbar data={data} />}
		>
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-6">
					{data.datasets.map((dataset, index) => (
						<ChartLegendItem key={index} color={dataset.backgroundColor as string} text={dataset.label as string} />
					))}
				</div>
				<BoardRepresentationDemandsChart data={data} />
			</div>
		</SectionCard>
	)
}
