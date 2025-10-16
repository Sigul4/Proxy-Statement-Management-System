interface Props {
	color: string
	text: string
}

export default function ChartLegendItem({ color, text }: Props) {
	return (
		<div className="flex items-center">
			<div className="size-3 rounded-full" style={{ backgroundColor: color }}></div>
			<p className="ml-2 text-xs text-gray-400">{text}</p>
		</div>
	)
}
