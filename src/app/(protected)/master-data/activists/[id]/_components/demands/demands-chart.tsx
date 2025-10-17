import { Chartjs } from "@/components/chartjs/chartjs"
import { radarColors } from "@/constants/chart-colors"
import { ChartConfiguration } from "chart.js"

export default function DemandsChart() {
	const config: ChartConfiguration = {
		type: "radar",
		data: {
			labels: ["Demand 4", "Demand 5", "Demand 1", "Demand 2", "Demand 3"],
			datasets: [
				{
					label: "2022",
					data: [80, 70, 50, 100, 100],
					fill: true,
					pointRadius: 0,
					backgroundColor: radarColors[0].backgroundColor,
					borderColor: radarColors[0].borderColor
				},
				{
					label: "2023",
					data: [90, 60, 64, 95, 82],
					fill: true,
					pointRadius: 0,
					backgroundColor: radarColors[1].backgroundColor,
					borderColor: radarColors[1].borderColor
				},
				{
					label: "2024",
					data: [60, 60, 77, 70, 88],
					fill: true,
					pointRadius: 0,
					backgroundColor: radarColors[2].backgroundColor,
					borderColor: radarColors[2].borderColor
				}
			]
		},
		options: {
			plugins: {
				legend: {
					display: false
				},
				datalabels: {
					display: false
				}
			},
			scales: {
				r: {
					beginAtZero: true,
					ticks: {
						stepSize: 20,
						display: true,
						align: "end",
						crossAlign: "near",
						color: "#9CA3AF"
					},
					startAngle: 0,
					pointLabels: {
						font: {
							size: 12,
							family: "var(--font-poppins)",
							weight: "bolder"
						},
						color: "#1B1B1B"
					}
				}
			}
		}
	}

	return (
		<div className="mx-auto h-[40rem]">
			<Chartjs config={config} width={400} height={500} />
		</div>
	)
}
