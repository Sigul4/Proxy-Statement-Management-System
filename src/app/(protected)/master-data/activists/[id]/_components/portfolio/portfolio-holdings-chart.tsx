"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef, useState } from "react"
import { ActivistPortfolioItem } from "../../../types"

interface Props {
	data: ActivistPortfolioItem[]
}

function renameDateByQuarter(date: string) {
	const [year, month] = date.split("-")
	const quarter = Math.floor(parseInt(month) / 3) + 1

	return ` Q${quarter} ${year}`
}

export default function PortfolioHoldingsChart({ data }: Props) {
	const [chart, setChart] = useState<Chart | null>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const values = data.map(item => item.value)
	const labels = data.map(item => item.reportingFor).map(renameDateByQuarter)

	const chartData: ChartData = {
		labels: labels,
		datasets: [
			{
				label: "Ownership",
				data: values,
				borderColor: primaryColors[2],
				pointBorderWidth: 4,
				fill: {
					target: "origin",
					above: primaryColors[1] + "22", // 33 is the opacity, it should be 0.2
					below: primaryColors[1] + "ff"
				}
			}
		]
	}

	const config: ChartConfiguration = {
		type: "line",
		data: chartData,
		options: {
			plugins: {
				legend: {
					display: false
				},
				datalabels: {
					display: false
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
						color: "#999",
						align: "start",
						autoSkip: true,
						crossAlign: "center",
						stepSize: 2,
						maxRotation: 0,
						padding: 10
					}
				},
				y: {
					stacked: true,
					grid: {
						display: false
					},
					title: {
						display: false
					},
					border: {
						display: false
					},
					ticks: {
						display: false
					}
				}
			}
		}
	}

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
		const chart = new Chart(ctx, config)

		setChart(chart)

		return () => {
			chart.destroy()
		}
	}, [])

	return (
		<div className="h-[200px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
