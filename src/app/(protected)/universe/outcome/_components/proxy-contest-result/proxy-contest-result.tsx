import { SectionCard } from "@/components/section-card"
import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import ProxyContestResultChart from "./proxy-contest-result-chart"
import ProxyContestResultToolbar from "./proxy-contest-result-toolbar"

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
			label: "Activist win",
			data: [5, 2, 10, 4, 1, 8, 2, 6, 3, 1],
			backgroundColor: primaryColors[0],
			barPercentage: 0.6,
			borderWidth: 3,
			borderColor: "#fff",
			borderSkipped: "top"
		},
		{
			label: "Activist partial win",
			data: [15, 14, 10, 7, 7, 12, 14, 17, 13, 7],
			backgroundColor: primaryColors[1],
			barPercentage: 0.6,
			borderWidth: 3,
			borderColor: "#fff",
			borderSkipped: "top"
		},
		{
			label: "Activist withdrew",
			data: [30, 33, 26, 30, 32, 31, 29, 31, 24, 30],
			backgroundColor: primaryColors[2],
			barPercentage: 0.6,
			borderWidth: 3,
			borderColor: "#fff",
			borderSkipped: "top"
		},
		{
			label: "Management win",
			data: [8, 8, 9, 8, 8, 7, 9, 8, 9, 7],
			backgroundColor: primaryColors[3],
			barPercentage: 0.6,
			borderWidth: 3,
			borderColor: "#fff",
			borderSkipped: "top"
		},
		{
			label: "Meeting postponed",
			data: [15, 15, 14, 14, 13, 11, 15, 13, 12, 10],
			backgroundColor: primaryColors[4],
			barPercentage: 0.6,
			borderWidth: 3,
			borderColor: "#fff",
			borderSkipped: "top"
		},
		{
			label: "Settlement",
			data: [10, 11, 12, 8, 10, 9, 12, 11, 10, 9],
			backgroundColor: primaryColors[5],
			barPercentage: 0.6,
			borderWidth: 3,
			borderColor: "#fff",
			borderSkipped: "top"
		}
	]
}

export default function ProxyContestResult() {
	return (
		<SectionCard
			id="proxy-contest-result"
			title="Proxy Contest Result"
			toolbar={<ProxyContestResultToolbar data={data} />}
		>
			<ProxyContestResultChart data={data} />
		</SectionCard>
	)
}
