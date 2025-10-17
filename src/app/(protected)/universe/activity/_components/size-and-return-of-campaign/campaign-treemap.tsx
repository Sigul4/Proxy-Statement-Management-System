"use client"

import { primaryColors } from "@/constants/chart-colors"
import colorLib from "@kurkle/color"
import { Chart, ChartConfiguration } from "chart.js/auto"
import { useEffect, useRef, useState } from "react"
import { SizeAndReturnOfCampaign } from "../../types"

const VALUES_HIDDEN_PERCENTATGE = 0.0125
const ALL_HIDDEN_PERCENTATGE = 0.005

export default function CampaignTreemap({ data }: { data: SizeAndReturnOfCampaign[] }) {
	const [, setChart] = useState<Chart | null>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const treeData = data.map(({ ticker, firstFilingPosition, return: returnValue }, index) => ({
		value: firstFilingPosition,
		label: `${ticker}`,
		labelValue: returnValue
		// isNegative
	}))

	const maxValue = Math.max(...treeData.map(x => x.value))
	const hiddenValue = maxValue * VALUES_HIDDEN_PERCENTATGE
	const allHiddenValue = maxValue * ALL_HIDDEN_PERCENTATGE

	const config:
		| ChartConfiguration
		| {
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

						const value = ctx.raw._data.labelValue
						if (!value) return "transparent"

						let alpha = Math.abs(value / 100)
						let color = value >= 0 ? primaryColors[1] : "#000000"

						return colorLib(color).alpha(alpha).rgbString()
					},
					labels: {
						align: "left",
						display: true,
						formatter(ctx: any) {
							if (ctx.type !== "data") {
								return
							}

							const itemValue = ctx.raw.v
							if (itemValue < allHiddenValue) return null

							const label = ctx.raw._data.label
							if (itemValue < hiddenValue) return [label]

							const labelValue = ctx.raw._data.labelValue

							const formattedLabelValue = parseFloat(labelValue).toFixed(2) + "%"

							if (!itemValue) return label

							return [label, formattedLabelValue]
						},
						color: (ctx: any) => {
							const value = ctx.raw._data.labelValue
							if (!value) return "#000000"

							return value < -50 ? "#FFFFFF" : "#000000"
						},
						font: [{ size: 14, weight: "bold" }, { size: 12 }],
						position: "top"
					}
				}
			]
		},
		options: {
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

	return <canvas ref={canvasRef} className="w-full"></canvas>
}
