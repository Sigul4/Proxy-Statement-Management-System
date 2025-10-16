"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration, ChartData } from "chart.js/auto"
import { useEffect, useRef } from "react"
import { useUniverseReturnStore } from "../../_store/universe-return-store"

function generateRandomData(numberOfPoints: number) {
	let datos = []
	for (let i = 0; i < numberOfPoints; i++) {
		let x = Math.random() * (2000 - -200) + -200
		let y = Math.random() * 80 * Math.exp(-Math.abs(x) / 1000)
		datos.push({ x: x, y: y })
	}
	return datos
}

const generatedDatasets = []

for (let i = 0; i < 11; i++) {
	generatedDatasets.push(generateRandomData(50))
}

const data: ChartData = {
	datasets: [
		{
			label: "Energy",
			data: generatedDatasets[0],
			backgroundColor: primaryColors[0],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Materials",
			data: generatedDatasets[1],
			backgroundColor: primaryColors[1],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Industrials",
			data: generatedDatasets[2],
			backgroundColor: primaryColors[2],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Consumer Discretionary",
			data: generatedDatasets[3],
			backgroundColor: primaryColors[3],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Consumer Staples",
			data: generatedDatasets[4],
			backgroundColor: primaryColors[4],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Healthcare",
			data: generatedDatasets[5],
			backgroundColor: primaryColors[5],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Financials",
			data: generatedDatasets[6],
			backgroundColor: primaryColors[6],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Information Technology",
			data: generatedDatasets[7],
			backgroundColor: primaryColors[7],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Communication Services",
			data: generatedDatasets[8],
			backgroundColor: primaryColors[8],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Utilities",
			data: generatedDatasets[9],
			backgroundColor: primaryColors[9],
			borderRadius: 4,
			barPercentage: 0.8
		},
		{
			label: "Real Estate",
			data: generatedDatasets[10],
			backgroundColor: primaryColors[10],
			borderRadius: 4,
			barPercentage: 0.8
		}
	]
}

// Sumar los valores de cada index en todos los conjuntos de datos
const totalData = data.labels?.map((label, index) => {
	return data.datasets.reduce((sum, dataset) => {
		const value: number = dataset.data[index] as number
		return sum + value
	}, 0)
})

// // Agregar el conjunto de datos de finalización al gráfico
// data.datasets.push({
// 	label: "Completion",
// 	data: completionData,
// 	backgroundColor: "rgba(211, 211, 211, 0.6)", // Gris claro
// 	borderColor: "rgba(211, 211, 211, 1)",
// 	borderWidth: 1
// })

const config: ChartConfiguration = {
	type: "scatter",
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
					color: "#999"
				},
				max: 2000,
				min: -200
			},
			y: {
				stacked: true,
				grid: {
					display: false
				},
				title: {
					display: true,
					align: "center",
					text: "Total",
					font: {
						size: 14
					}
				},
				border: {
					display: false
				},
				ticks: {
					stepSize: 100,
					color: "#999"
				},
				min: -5,
				max: 80
			}
		}
	}
}

export default function ReturnAnalyticsChart() {
	const setChart = useUniverseReturnStore(state => state.setReturnAnalyticsChart)

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
		<div className="h-[450px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
