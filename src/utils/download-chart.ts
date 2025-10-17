import { Chart } from "chart.js/auto"

export function downloadChart(chart: Chart, filename: string) {
	const a = document.createElement("a")
	a.href = chart.toBase64Image()
	a.download = `${filename}.png`
	a.click()
}
