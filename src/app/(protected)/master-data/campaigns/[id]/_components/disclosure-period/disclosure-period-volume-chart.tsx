"use client"

import { primaryColors } from "@/constants/chart-colors"
import Chart, { ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useCampaignDetailsStore } from "../../_store/campaign-details-store"

const values = [
	// eslint-disable-next-line array-element-newline
	20, 24, 26, 21, 50, 20, 78, 82, 20, 27, 120, 20, 103, 109, 78, 82, 20, 27, 20, 20, 103, 109, 78, 82, 20,
	// eslint-disable-next-line array-element-newline
	27, 14, 20, 12, 23, 25, 10, 10, 17
]

const lineValues = [
	// eslint-disable-next-line array-element-newline
	40, 48, 52, 42, 100, 40, 56, 14, 40, 54, 240, 40, 26, 28, 16, 164, 40, 54, 40, 40, 26, 28, 16, 14, 40, 54,
	// eslint-disable-next-line array-element-newline
	28, 40, 24, 46, 50, 20, 20, 34
]

const data: ChartData = {
	labels: [
		"Aug 21",
		"Aug 21",
		"Sep 21",
		"Sep 21",
		"Oct 21",
		"Oct 21",
		"Nov 21",
		"Nov 21",
		"Dec 21",
		"Dec 21",
		"Jan 22",
		"Jan 22",
		"Feb 22",
		"Feb 22",
		"Mar 22",
		"Mar 22",
		"Apr 22",
		"Apr 22",
		"May 22",
		"May 22",
		"Jun 22",
		"Jun 22",
		"Jul 22",
		"Jul 22",
		"Aug 22",
		"Aug 22",
		"Sep 22",
		"Sep 22",
		"Oct 22",
		"Oct 22",
		"Nov 22",
		"Nov 22",
		"Dec 22",
		"Dec 22"
	],
	datasets: [
		{
			label: "30-day moving average",
			data: lineValues,
			borderColor: primaryColors[0],
			type: "line",
			pointRadius: 0
		},
		{
			label: "Each day volume",
			data: values,
			backgroundColor: primaryColors[1],
			borderRadius: 4,
			barPercentage: 1.1,
			type: "bar"
		}
	]
}

const config: ChartConfiguration = {
	data: data,
	type: "bar",
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
					color: "#999"
				}
			}
		}
	}
}

export default function DisclosurePeriodVolumeChart() {
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
		<div className="h-[200px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
