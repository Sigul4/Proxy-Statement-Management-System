"use client"

import { primaryColors } from "@/constants/chart-colors"
import { Chart, ChartConfiguration, ChartData } from "chart.js"
import { useEffect, useRef, useState } from "react"

let index = -1
const generatedData = Array.from({ length: 11 }, () => {
	index++
	return Array.from({ length: 1 }, () => {
		return Array.from({ length: 50 }, () => {
			// x only can be -0.2, 0, 0.2
			const x = (Math.random() < 0.33 ? -0.2 : Math.random() < 0.5 ? 0 : 0.2) + index
			return {
				x,
				y: Math.random() * 80,
				r: Math.random() * 10
			}
		})
	})
})

const flatData = generatedData.flat().flat()

// group by x. x can be -0.2, 0, 0.2
const groupedByX = flatData.reduce(
	(acc, cur) => {
		const key = cur.x.toString().endsWith(".2")
			? 0.2
			: cur.x.toString().endsWith(".2") || cur.x.toString().endsWith(".8")
				? -0.2
				: 0
		if (!acc[key]) {
			acc[key] = []
		}
		acc[key].push(cur)
		return acc
	},
	{} as { [key: number]: { x: number; y: number; r: number }[] }
)

const data: ChartData = {
	labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
	datasets: [
		{
			label: "Energy",
			data: groupedByX[0.2],
			backgroundColor: primaryColors[0],
			borderRadius: 10
		},
		{
			type: "bar",
			data: [
				{
					x: 0,
					y: 80
				},
				{
					x: 1,
					y: 80
				},
				{
					x: 2,
					y: 80
				},
				{
					x: 3,
					y: 80
				},
				{
					x: 4,
					y: 80
				},
				{
					x: 5,
					y: 80
				},
				{
					x: 6,
					y: 80
				},
				{
					x: 7,
					y: 80
				},
				{
					x: 8,
					y: 80
				},
				{
					x: 9,
					y: 80
				},
				{
					x: 10,
					y: 80
				}
			],
			hoverBackgroundColor: "#fafafa",
			backgroundColor: "#fafafa",
			datalabels: {
				display: false
			}
		}
	]
}

const config: ChartConfiguration = {
	type: "bubble",
	data: data,
	options: {
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				enabled: false
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
				labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
				min: 0,
				max: 10
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
				max: 80,
				border: {
					display: false
				}
			}
		}
	}
}

export default function PortfolioFollowerReturnChart() {
	const [chart, setChart] = useState<Chart | null>(null)

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
		<div className="h-[380px] w-full">
			<canvas ref={canvasRef}>Your browser does not support the canvas element.</canvas>
		</div>
	)
}
