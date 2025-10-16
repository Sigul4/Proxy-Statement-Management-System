"use client"

import Chart, { ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { usePorfolioStore } from "../../_store/portfolio-store"

export default function PortfolioCompositionAnalysisChart({ data }: { data: ChartData }) {
	const setChart = usePorfolioStore(state => state.setPorfolioCompositionAnalysis)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const config: ChartConfiguration = {
		type: "bar",
		data,
		options: {
			plugins: {
				legend: {
					display: false
				},
				datalabels: {
					display: true,
					anchor: "center",
					align: "center",
					color: "#fff",
					clamp: true,
					font: {
						weight: "bold"
					},
					formatter: (value, context) => {
						if (value < 8) return ""
						return value + "%"
					}
				},
				stacked100: {
					enable: true
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
						color: "#999"
					}
				},
				y: {
					stacked: true,
					grid: {
						display: false
					},
					ticks: {
						count: 6,
						callback: value => {
							return value + "%"
						},
						color: "#999"
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
		<div className="h-[400px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
