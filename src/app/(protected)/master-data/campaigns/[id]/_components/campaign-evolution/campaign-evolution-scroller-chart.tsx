"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useCampaignDetailsStore } from "../../_store/campaign-details-store"

const values = [
	// eslint-disable-next-line array-element-newline
	156, 107, 129, 111, 103, 109, 78, 82, 113, 27, 120, 111, 103, 109, 78, 82, 113, 27, 120, 111, 103, 109, 78, 82, 113,
	// eslint-disable-next-line array-element-newline
	27, 120, 111, 140, 150, 160, 170, 180, 200
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
			borderColor: primaryColors[1],
			pointRadius: 0
		}
	]
}

const canvasBackgroundColorPlugin = {
	id: "canvasBackgroundColor",
	beforeDraw: (chart: Chart, args: any, options: any) => {
		const { ctx } = chart
		ctx.save()
		ctx.globalCompositeOperation = "destination-over"
		ctx.fillStyle = options.color || "#99ffff"
		ctx.fillRect(0, 0, chart.width, chart.height)
		ctx.restore()
	}
}

const config: ChartConfiguration & {
	options: {
		plugins: {
			canvasBackgroundColor: {
				color: string
			}
		}
	}
} = {
	type: "line",
	data: data,
	options: {
		plugins: {
			legend: {
				display: false
			},
			datalabels: {
				display: false
			},
			canvasBackgroundColor: {
				color: "#fafafa"
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		backgroundColor: "#ccc",
		scales: {
			x: {
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
	},
	plugins: [canvasBackgroundColorPlugin]
}

export default function CampaignEvolutionScrollerChart() {
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
		<div className="h-[100px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
