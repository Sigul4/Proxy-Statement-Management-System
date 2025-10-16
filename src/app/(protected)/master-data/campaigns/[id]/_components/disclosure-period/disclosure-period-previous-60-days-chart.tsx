"use client"

import { primaryColors } from "@/constants/chart-colors"
import Chart, { ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useCampaignDetailsStore } from "../../_store/campaign-details-store"

const values = [
	// eslint-disable-next-line array-element-newline
	23, 67, 87, 55, 27, 94, 78, 82, 58, 27, 45, 67, 82, 62, 78, 82, 92, 27, 92, 76, 90, 91, 78, 82, 87,
	// eslint-disable-next-line array-element-newline
	27, 45, 65, 36, 78, 78, 82, 57, 27
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
			label: "Ownership",
			data: values,
			backgroundColor: primaryColors[1],
			borderRadius: 4,
			barPercentage: 1.1
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
					stepSize: 30
				}
			}
		}
	}
}

export default function DisclosurePeriodPrevious60DaysChart() {
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
