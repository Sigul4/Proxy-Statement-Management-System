import { SectionCard } from "@/components/section-card"
import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import OutcomesChart from "./outcomes-chart"
import OutcomesToolbar from "./outcomes-toolbar"

const data: ChartData = {
	labels: [
		"Proxy season 2015",
		"Proxy season 2016",
		"Proxy season 2017",
		"Proxy season 2018",
		"Proxy season 2019",
		"Proxy season 2020",
		"Proxy season 2021",
		"Proxy season 2022",
		"Proxy season 2023",
		"Proxy season 2024"
	],
	datasets: [
		{
			label: "Energy",
			data: [20, 17, 20, 10, 10, 10, 9, 9, 9, 2],
			backgroundColor: primaryColors[0],
			borderRadius: 4
		},
		{
			label: "Material",
			data: [15, 14, 10, 7, 7, 9, 9, 4, 2, 2],
			backgroundColor: primaryColors[1],
			borderRadius: 4
		},
		{
			label: "Industrials",
			data: [5, 5, 10, 4, 3, 1, 5, 3, 0, 0],
			backgroundColor: primaryColors[2],
			borderRadius: 4
		}
	]
}

export default function Outcomes() {
	return (
		<SectionCard id="outcomes-chart" title="Outcomes" toolbar={<OutcomesToolbar data={data} />}>
			<OutcomesChart data={data} />
		</SectionCard>
	)
}
