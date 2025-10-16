"use client"

import { NEGATIVE_COLOR, primaryColors } from "@/constants/chart-colors"
import Chart, { ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useCampaignDetailsStore } from "../../_store/campaign-details-store"

const values = [
	// eslint-disable-next-line array-element-newline
	2, 1.5, 1.3, -3.8, 2.5, 8, 1.7, 3.5, 1, 2, -3, -3.5, 9, 2.2, 1.7, 1, -3.5, 3.5, 1, 2, -3, -3.5, 3.7, 2.2, 1.7, 1,
	// eslint-disable-next-line array-element-newline
	-3.8, 2, 1.5, 1.3, 9, 2.2, 1.7, 1, -4, 3.5, 1, 2, -3
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
		"10 May"
	],
	datasets: [
		{
			label: "Ownership",
			data: values,
			backgroundColor: (context: { dataIndex: number }) => {
				const value = values[context.dataIndex]
				return value > 0 ? primaryColors[1] : NEGATIVE_COLOR
			},
			borderRadius: 8
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
					stepSize: 2,
					maxRotation: 0,
					padding: 10
				}
			},
			y: {
				stacked: true,
				grid: {
					display: true
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
					format: {}
				}
			}
		}
	}
}

export default function DisclosurePeriodDailyReturnChart() {
	const setChart = useCampaignDetailsStore(state => state.setCampaignEvolutionOwnershipChart)
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
		<div className="h-[500px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
