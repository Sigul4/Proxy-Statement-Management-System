"use client"

import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { usePorfolioStore } from "../../_store/portfolio-store"

export default function TopPerformingPortfoliosChart({ data }: { data: ChartData }) {
	const setChart = usePorfolioStore(state => state.setTopPerformingPortfoliosChart)

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
					display: false
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				x: {
					grid: {
						display: false
					},
					ticks: {
						color: "#999"
					},
					border: {
						color: "#F1F1F1"
					}
				},
				y: {
					grid: {
						display: false
					},
					ticks: {
						count: 5,
						callback: value => {
							if (value === 0) return "0"
							return value + "%"
						},
						color: "#999"
					},
					border: {
						display: false
					},
					max: 20
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
		<div className="h-[280px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
