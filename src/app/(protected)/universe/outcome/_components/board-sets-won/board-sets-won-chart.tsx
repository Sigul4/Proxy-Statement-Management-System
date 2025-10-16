"use client"

import { Chartjs } from "@/components/chartjs/chartjs"
import { splitLongText } from "@/utils/text-utils"
import { ChartConfiguration, ChartData } from "chart.js/auto"
import { useOutcomesStore } from "../../_store/outcomes-store"

export default function BoardSetsWonChart({ data }: { data: ChartData }) {
	const setChart = useOutcomesStore(state => state.setBoardSetsWonChart)

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
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					stacked: true,
					grid: {
						display: false
					},
					ticks: {
						font: {
							size: 10,
							weight: 400
						},
						color: "#999",
						maxRotation: 0,
						callback: function (value) {
							const MAX_LABEL_LENGTH = 14
							const label = this.getLabelForValue(Number(value))
							const lines = splitLongText(label, MAX_LABEL_LENGTH)
							return lines
						}
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

	return <Chartjs config={config} height={400} width={400} setStoreChart={setChart} />
}
