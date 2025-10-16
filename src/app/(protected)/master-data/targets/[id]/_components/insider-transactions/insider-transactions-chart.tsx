"use client"

import { NEGATIVE_COLOR, primaryColors } from "@/constants/chart-colors"
import Chart, { ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef, useState } from "react"

const values = [
	// eslint-disable-next-line array-element-newline
	2, 1.5, 1.3, 3.8, 0, 8, 1.7, 3.5, 1, 2, 3, 0, 9, 2.2, 1.7, 1, 3.5, 3.5, 0, 2, 3, 3.5, 3.7, 0, 1.7, 1, 2, 3, 0, 1.5,
	// eslint-disable-next-line array-element-newline
	1.3, 3.8, 0, 8, 1.7, 3.5, 1, 2, 3, 0, 9, 2.2, 1.7, 1, 0, 0, 0, 2, 3, 3.5, 3.7, 0, 1.7, 1, 2, 3, 0, 1.5, 1.3, 3.8,
	// eslint-disable-next-line array-element-newline
	0, 8, 1.7, 3.5, 1
]

const data: ChartData = {
	labels: [
		"03 Apr",
		"04 Apr",
		"05 Apr",
		"06 Apr",
		"07 Apr",
		"08 Apr",
		"09 Apr",
		"10 Apr",
		"11 Apr",
		"12 Apr",
		"13 Apr",
		"14 Apr",
		"15 Apr",
		"16 Apr",
		"17 Apr",
		"18 Apr",
		"19 Apr",
		"20 Apr",
		"21 Apr",
		"22 Apr",
		"23 Apr",
		"24 Apr",
		"25 Apr",
		"26 Apr",
		"27 Apr",
		"28 Apr",
		"29 Apr",
		"30 Apr",
		"01 May",
		"02 May",
		"03 May",
		"04 May",
		"05 May",
		"06 May",
		"07 May",
		"08 May",
		"09 May",
		"10 May",
		"11 May",
		"12 May",
		"13 May",
		"14 May",
		"15 May",
		"16 May",
		"17 May",
		"18 May",
		"19 May",
		"20 May",
		"21 May",
		"22 May",
		"23 May",
		"24 May",
		"25 May",
		"26 May",
		"27 May",
		"28 May",
		"29 May",
		"30 May",
		"31 May",
		"01 Jun",
		"02 Jun",
		"03 Jun",
		"04 Jun",
		"05 Jun",
		"06 Jun"
	],
	datasets: [
		{
			label: "Ownership",
			data: values,
			backgroundColor: (context: { dataIndex: number }) => {
				const value = values[context.dataIndex]
				return value > 0 ? primaryColors[1] : NEGATIVE_COLOR
			},
			borderRadius: 4
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
					maxRotation: 0,
					stepSize: 5,
					padding: 10
				},
				border: {
					color: "#F1F1F1"
				}
			},
			y: {
				stacked: true,
				grid: {
					display: true,
					color: "#F1F1F1",
					tickLength: 0
				},
				title: {
					display: false
				},
				border: {
					display: false,
					dash: [5, 5]
				},
				ticks: {
					display: true,
					color: "#999",
					stepSize: 2,
					padding: 10,
					callback(tickValue) {
						return tickValue + "%"
					}
				}
			}
		}
	}
}

export default function InsiderTransactionsChart() {
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
