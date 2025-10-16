"use client"

import { splitLongText } from "@/utils/text-utils"
import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef, useState } from "react"

export function BarStacked100Chart({ data }: { data: ChartData }) {
	const [chart, setChart] = useState<Chart | null>(null)
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
				stacked100: {
					enable: true
				}
			},
			responsive: true,
			scales: {
				x: {
					stacked: true,
					grid: {
						display: false
					},
					ticks: {
						font: {
							size: 10,
							weight: 400
						},
						color: "#999",
						maxRotation: 0,
						callback: function (value) {
							const MAX_LABEL_LENGTH = 14
							const label = this.getLabelForValue(Number(value))
							const lines = splitLongText(label, MAX_LABEL_LENGTH)
							return lines
						}
					}
				},
				y: {
					stacked: true,
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
						color: "#999",
						callback: function (value) {
							return value + "%"
						},
						stepSize: 20
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
		<canvas ref={canvasRef} className="mt-4 w-full" height={280}>
			Your browser does not support the canvas element.
		</canvas>
	)
}
