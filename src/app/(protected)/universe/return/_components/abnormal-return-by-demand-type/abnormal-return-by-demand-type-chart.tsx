"use client"

import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useUniverseReturnStore } from "../../_store/universe-return-store"

export function AbnormalReturnByDemandTypeChart({ data }: { data: ChartData }) {
	const setChart = useUniverseReturnStore(state => state.setAbnormalReturnByDemandTypeChart)

	const canvasRef = useRef<HTMLCanvasElement>(null)

	const maxValue = Math.max(...data.datasets.map(dataset => Math.max(...(dataset.data as number[]))))

	const config: ChartConfiguration = {
		type: "bar",
		data: data,
		options: {
			plugins: {
				legend: {
					display: false
				},
				datalabels: {
					align: "end",
					anchor: "start",
					rotation: 270,
					color: "#fff",
					display: true,
					formatter(value, context) {
						return `${value}%`
					}
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					stacked: false,
					grid: {
						display: false
					},
					ticks: {
						font: {
							size: 10,
							weight: 400
						},
						color: "#999",
						maxRotation: 0
					}
				},
				y: {
					stacked: false,
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
						stepSize: maxValue / 5,
						color: "#999",
						callback(value) {
							return `${value}%`
						}
					},
					border: {
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
		<div className="h-[450px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
