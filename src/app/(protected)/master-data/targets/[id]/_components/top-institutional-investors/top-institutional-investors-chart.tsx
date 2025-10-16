"use client"

import Chart, { ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef, useState } from "react"

const values = [15, 14, 13, 12, 11, 11, 11, 10, 9, 8, 8, 7, 6, 5, 5, 4, 4, 3.75, 3.5, 3, 3]
const data: ChartData = {
	labels: [
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name",
		"Investor name"
	],
	datasets: [
		{
			label: "Ownership",
			data: values,
			backgroundColor: "#3A5A66",
			borderRadius: 4,
			barPercentage: 0.7
		}
	]
}

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
				align: "end",
				color: "#FFF",
				anchor: "start",
				rotation: 270,
				formatter(value) {
					return value + "%"
				},
				font: {
					family: "Arial",
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
					color: "#999",
					align: "start",
					autoSkip: true,
					crossAlign: "center",
					maxRotation: 0,
					stepSize: 5,
					padding: 10
				}
			},
			y: {
				stacked: true,
				grid: {
					display: false,
					color: "#F1F1F1",
					tickLength: 0
				},
				border: {
					display: false
				},
				title: {
					display: false
				},
				ticks: {
					display: true,
					color: "#999",
					stepSize: 2,
					padding: 10,
					callback(tickValue) {
						return tickValue + "%"
					}
				},
				max: 20
			}
		}
	}
}

export default function TopInstitutionalInvestorsChart() {
	const [chart, setChart] = useState<Chart | null>(null)
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
		<div className="h-[350px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
