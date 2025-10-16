"use client"

import { primaryColors } from "@/constants/chart-colors"
import colorLib from "@kurkle/color"
import { Chart, ChartConfiguration } from "chart.js/auto"
import { useEffect, useRef, useState } from "react"
import { CommonHoldings } from "../../types"

export default function CommonHoldingsTreemap({ items }: { items: CommonHoldings[] }) {
	const [chart, setChart] = useState<Chart | null>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const maxValue = Math.max(...items.map(item => item.value))

	const treeData = items.map(({ boxSize, value, company, percentage, quarter }, index) => ({
		value: boxSize,
		label: company,
		colorDensity: value,
		percentage
	}))

	const config:
		| ChartConfiguration
		| {
				type: "treemap"
				data: any
		  } = {
		type: "treemap",
		data: {
			datasets: [
				{
					tree: treeData,
					key: "value",
					spacing: 1,
					backgroundColor: (ctx: any) => {
						if (ctx.type !== "data") {
							return "transparent"
						}
						const value = ctx.raw._data.colorDensity
						let alpha = value / maxValue + 0.2
						const color = primaryColors[1]
						return colorLib(color).alpha(alpha).rgbString()
					},
					labels: {
						align: "left",
						display: true,
						formatter(ctx: any) {
							if (ctx.type !== "data") {
								return
							}
							const itemLabel = ctx.raw._data.label
							const itemValue = ctx.raw.v

							if (!itemValue) return itemLabel

							const percentage: number = ctx.raw._data.percentage

							const cellValue = `${percentage.toString().substring(0, 4)}`
							if (percentage < 0.1) return [itemLabel, ""]

							return [itemLabel, cellValue]
						},
						font: [{ size: 14, weight: "bold" }, { size: 12 }],
						position: "top",
						padding: 10,
						overflow: "cut"
					}
				}
			]
		},
		options: {
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: false
				},
				legend: {
					display: false
				},
				datalabels: {
					display: false
				},
				tooltip: {
					enabled: false,
					position: "average"
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

	return <canvas ref={canvasRef} className="h-[50rem] w-full"></canvas>
}
