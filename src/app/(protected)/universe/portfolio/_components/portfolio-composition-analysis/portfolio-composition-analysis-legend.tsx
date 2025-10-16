import { primaryColors } from "@/constants/chart-colors"
import { cn } from "@/lib/utils"

export default function PortfolioCompositionAnalysisLegend({ items }: { items: string[] }) {
	return (
		<div className="mb-8 flex w-full flex-wrap gap-6 gap-y-4 text-xs">
			{items.map((item, index) => (
				<LegendItem key={index} color={primaryColors[index]} label={item} />
			))}
		</div>
	)
}

function LegendItem({ color, label }: { color: string; label: string }) {
	return (
		<div className="flex items-center gap-2">
			<div
				className={cn("h-3 w-3 rounded-full")}
				style={{
					backgroundColor: color
				}}
			></div>
			<span className="text-micro tracking-[0.4px] text-[#999]">{label}</span>
		</div>
	)
}
