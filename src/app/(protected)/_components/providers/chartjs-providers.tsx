"use client"

import { Chart, LinearScale, PointElement, RadarController, RadialLinearScale, ScatterController } from "chart.js/auto"
import {
	BarWithErrorBar,
	BarWithErrorBarsController,
	PointWithErrorBar,
	ScatterWithErrorBarsChart,
	ScatterWithErrorBarsController
} from "chartjs-chart-error-bars"
import { TreemapController, TreemapElement } from "chartjs-chart-treemap"
import AnnotationPlugin from "chartjs-plugin-annotation"
import ChartDataLabels from "chartjs-plugin-datalabels"
import ChartjsGradient from "chartjs-plugin-gradient"
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100"

Chart.register(
	TreemapController,
	TreemapElement,
	ChartjsPluginStacked100,
	ScatterController,
	LinearScale,
	PointElement,
	ChartDataLabels,
	ChartjsGradient,
	BarWithErrorBarsController,
	BarWithErrorBar,
	ScatterWithErrorBarsChart,
	ScatterWithErrorBarsController,
	PointWithErrorBar,
	RadarController,
	RadialLinearScale,
	AnnotationPlugin
)

export default function ChartjsProviders({ children }: { children: React.ReactNode }) {
	return children
}
