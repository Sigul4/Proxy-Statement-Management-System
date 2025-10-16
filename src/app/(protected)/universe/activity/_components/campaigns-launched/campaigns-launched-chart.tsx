"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration, ChartData, ChartDataset } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useUniverseActivityStore } from "../../_store/universe-activity-store"
import { htmlLegendPlugin } from "./html-legend-plugin"

interface Props {
	data: {
		year: number
		data: {
			primaryFormType: string
			count: number
		}[]
	}[]
}

const AXIS_Y_STEP_SIZE = 100
const AXIS_Y_MAX_VALUE_FACTOR = 0.1

export function CampaignsLaunchedChart({ data }: Props) {
	const setCampaignsLaunchedChart = useUniverseActivityStore(state => state.setCampaignsLaunchedChart)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const datasetsData = {
		"13D": data.map(x => x.data.find(y => y.primaryFormType === "13D")?.count || 0),
		"13G": data.map(x => x.data.find(y => y.primaryFormType === "13G")?.count || 0),
		"Hybrid": data.map(x => x.data.find(y => y.primaryFormType === "Hybrid")?.count || 0)
	}

	const labels = data.map(x => x.year.toString())
	const datasets: ChartDataset[] = [
		{
			label: "13D",
			data: datasetsData["13D"],
			backgroundColor: primaryColors[0],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "13G",
			data: datasetsData["13G"],
			backgroundColor: primaryColors[1],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Hybrid",
			data: datasetsData.Hybrid,
			backgroundColor: primaryColors[2],
			borderRadius: 4,
			barPercentage: 0.8
		}
	]

	// Sumar los valores de cada index en todos los conjuntos de datos
	const totalData = labels?.map((label, index) => {
		return datasets.reduce((sum, dataset) => {
			const value: number = dataset.data[index] as number
			return sum + value
		}, 0)
	})

	const maxValue = Math.max(...(totalData as number[]))
	const chartMaxValue = maxValue + maxValue * AXIS_Y_MAX_VALUE_FACTOR

	const chartData: ChartData = {
		labels,
		datasets
	}

	const config: ChartConfiguration & {
		options: {
			plugins: {
				htmlLegend: {
					containerID: string
				}
			}
		}
	} = {
		type: "bar",
		data: chartData,
		options: {
			plugins: {
				htmlLegend: {
					containerID: "campaigns-launched-legend"
				},
				legend: {
					display: false
				},
				datalabels: {
					display: false,
					rotation: 270,
					color: "#fff",
					anchor: "start",
					clamp: true,
					align: "end",
					font: {
						weight: "bolder",
						family: "Poppins"
					}
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
						align: "center",
						maxRotation: 0,
						font: {
							size: 10
						}
					}
				},
				topX: {
					position: "top",
					grid: {
						drawOnChartArea: false,
						lineWidth: 0
					},
					ticks: {
						align: "center",
						crossAlign: "near",
						maxRotation: 0,
						color: "#1B1B1B",
						font: {
							weight: "normal"
						},
						padding: 0,
						callback(tickValue, index) {
							return totalData ? totalData[index] : tickValue
						}
					}
				},
				y: {
					stacked: true,
					grid: {
						display: true,
						tickLength: 10,
						tickColor: "white",
						color: context => {
							const tickValue = context.tick.value
							if (tickValue === 0 || tickValue === chartMaxValue) {
								return "transparent"
							}
							return "#f0f0f0"
						}
					},
					border: {
						display: false,
						dash: [5, 5]
					},
					ticks: {
						stepSize: AXIS_Y_STEP_SIZE,
						color: "#999",
						callback(value) {
							const maxTickValue = Math.floor(this.max / AXIS_Y_STEP_SIZE) * AXIS_Y_STEP_SIZE
							const tickValue = value as number
							if (tickValue > maxTickValue) {
								return "Total" // Don't show the last tick value
							}
							return value // Return the actual tick value
						}
					},
					max: chartMaxValue
				}
			}
		},
		plugins: [
			htmlLegendPlugin,
			{
				id: "rectangleUnderlay",
				beforeDraw: chart => {
					const ctx = chart.ctx
					const chartArea = chart.chartArea

					// Draw a background rectangle foreach bar in the chart with gray color
					for (let i = 0; i < chart.data.datasets.length; i++) {
						const meta = chart.getDatasetMeta(i)

						meta.data.forEach((bar: any) => {
							ctx.save()
							ctx.fillStyle = "#f0f0f0"
							ctx.fillRect(bar.x - bar.width / 2, chartArea.top, bar.width, chartArea.bottom - chartArea.top)
							ctx.restore()
						})
					}
				}
			}
		]
	}

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
		const chart = new Chart(ctx, config)

		setCampaignsLaunchedChart(chart)

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
