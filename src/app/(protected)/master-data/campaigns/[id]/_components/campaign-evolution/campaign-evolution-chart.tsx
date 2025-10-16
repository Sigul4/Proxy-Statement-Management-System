"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useCampaignDetailsStore } from "../../_store/campaign-details-store"

const values = [
	// eslint-disable-next-line array-element-newline
	23, 28, 33, 37, 40, 35, 45, 57, 45, 66, 56, 43, 47, 52, 68, 72, 70, 74, 80, 62, 78, 83
]

const values2 = values.map(value => value - 10)

const values3 = values.map(value => value - 20)

const values4 = values.map(value => value - 30)

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
		"Jun 22"
	],
	datasets: [
		{
			label: "S&P500",
			data: values2,
			borderColor: "#D7C961",
			pointRadius: 0
		},
		{
			label: "Ownership",
			data: values,
			borderColor: primaryColors[1],
			fill: {
				target: "origin",
				above: primaryColors[1] + "33", // 33 is the opacity, it should be 0.2
				below: primaryColors[1] + "33"
			}
		},
		{
			label: "13D",
			type: "scatter",
			pointStyle: "triangle",
			pointRotation: 180,
			pointBackgroundColor: "red",
			data: values,
			borderColor: "red"
		},
		{
			label: "13D/A",
			type: "scatter",
			pointStyle: "triangle",
			pointRotation: 180,
			pointBackgroundColor: "blue",
			data: values3,
			borderColor: "blue"
		},
		{
			label: "13G",
			type: "scatter",
			pointStyle: "triangle",
			pointRotation: 180,
			pointBackgroundColor: "purple",
			data: values4,
			borderColor: "purple"
		},
		{
			label: "DEFC14",
			type: "scatter",
			pointStyle: "triangle",
			pointRotation: 180,
			pointBackgroundColor: "#D7C961",
			data: values3,
			borderColor: "red"
		}
	]
}

const config: ChartConfiguration = {
	type: "line",
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

export default function CampaignEvolutionChart() {
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
