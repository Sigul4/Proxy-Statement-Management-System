import { SectionCard } from "@/components/section-card"
import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import BoardSetsWonChart from "./board-sets-won-chart"
import BoardSetsWonToolbar from "./board-sets-won-toolbar"

const data: ChartData = {
	labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
	datasets: [
		{
			label: "Seats",
			data: [10, 20, 17, 20, 10, 10, 10, 9, 9, 9, 2],
			backgroundColor: primaryColors[0],
			borderRadius: 4
		},
		{
			label: "Seats won",
			data: [10, 15, 14, 10, 7, 7, 9, 9, 4, 2, 2],
			backgroundColor: primaryColors[1],
			borderRadius: 4
		}
	]
}

export default function BoardSetsWon() {
	return (
		<SectionCard id="board-sets-won" title="Board seats won" toolbar={<BoardSetsWonToolbar data={data} />}>
			<BoardSetsWonChart data={data} />
		</SectionCard>
	)
}
