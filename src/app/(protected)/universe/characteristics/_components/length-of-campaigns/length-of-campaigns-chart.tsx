"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useCharacteristicsStore } from "../../_store/characteristics-store"

const dataValues = [3, 2, 6, 7, 4, 4, 2, 1]
const dataLabels = ["Less than 3M", "3M-6M", "6M-1Y", "1Y-2Y", "2Y-3Y", "4Y-5Y", "More than 5Y"]
const config: ChartConfiguration = {
	type: "bar",
	data: {
		labels: dataLabels,
		datasets: [
			{
				label: "Group A",
				data: dataValues,
				backgroundColor: primaryColors[1],
				borderColor: primaryColors[1] + "40",
				borderWidth: {
					left: 40,
					right: 40
				},
				barPercentage: 1.2,
				datalabels: {
					display: false
				}
			}
		]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					display: false
				},
				ticks: {
					color: "#999"
				}
			},
			y: {
				grid: {
					display: false
				},
				border: {
					display: false
				},
				ticks: {
					color: "#999"
				}
			}
		}
	}
}

export function LengthOfCampaignsChart() {
	const setChart = useCharacteristicsStore(state => state.setLengthOfCampaignsChart)

	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
		const chart = new Chart(ctx, config)
		setChart(chart)

		return () => {
			chart.destroy()
		}
	}, [])

	return (
		<div className="h-[380px] w-full">
			<canvas ref={canvasRef}></canvas>
		</div>
	)
}
