import { Chartjs } from "@/components/chartjs/chartjs"
import { ChartConfiguration, ChartData } from "chart.js"

export default function BoardRepresentationDemandsChart({ data }: { data: ChartData }) {
	const config: ChartConfiguration = {
		type: "bar",
		data: data,
		options: {
			plugins: {
				legend: {
					display: false
				},
				datalabels: {
					display: true,
					rotation: 0,
					color: "#fff",
					anchor: "start",
					clamp: true,
					align: "end",
					font: {
						weight: "normal"
					}
				}
			},
			responsive: false,
			maintainAspectRatio: false,
			indexAxis: "y",
			scales: {
				x: {
					stacked: true,
					grid: {
						display: false
					},
					ticks: {
						display: false
					},
					border: {
						display: false
					}
				},
				y: {
					stacked: true,
					grid: {
						display: false
					},
					title: {
						display: true,
						align: "center",
						font: {
							size: 14
						}
					},
					ticks: {
						color: "#999"
					},
					border: {
						display: false
					}
				}
			}
		}
	}

	return <Chartjs config={config} height={400} width={400} />
}
