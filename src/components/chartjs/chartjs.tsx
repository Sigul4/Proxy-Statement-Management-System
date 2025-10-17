"use client"

import { Chart } from "chart.js"
import { useEffect, useRef, useState } from "react"

export function Chartjs({
	config,
	height,
	width,
	setStoreChart
}: {
	config: any
	height?: number
	width?: number
	setStoreChart?: (chart: Chart) => void
}) {
	const [chart, setChart] = useState<Chart | null>(null)

	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D
		const chart = new Chart(ctx, config)

		if (setStoreChart) {
			setStoreChart(chart)
		} else {
			setChart(chart)
		}

		return () => {
			chart.destroy()
		}
	}, [])

	return (
		<canvas ref={canvasRef} width={width} height={height}>
			Your browser does not support the canvas element.
		</canvas>
	)
}
