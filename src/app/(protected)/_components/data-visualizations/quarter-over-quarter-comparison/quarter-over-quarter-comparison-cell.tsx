import { Cell } from "@tanstack/react-table"
import Image from "next/image"
import { QuarterOverQuarterComparisonItem } from "./types"

export default function QuarterOverQuarterComparisonCell({
	cell,
	percentatge,
	indicator
}: {
	cell: Cell<QuarterOverQuarterComparisonItem, any>
	percentatge?: boolean
	indicator?: boolean
}) {
	let value = cell.getValue()

	let valueFormatted = value
	if (!percentatge) {
		// set points for the value each 1000
		valueFormatted = Intl.NumberFormat("en-US", {
			style: "decimal",
			maximumFractionDigits: 0
		}).format(value)
	}

	if (indicator) {
		if (value < 0) {
			return (
				<div className="flex items-center gap-2">
					<Image
						src="/icons/icon-arrow-down-stock.svg"
						alt="Stock arrow"
						height={5}
						width={8}
						className="aspect-square rounded-full"
					/>
					{valueFormatted}
				</div>
			)
		} else if (value > 0) {
			return (
				<div className="flex items-center gap-1">
					<Image
						src="/icons/icon-arrow-up-stock.svg"
						alt="Stock arrow"
						height={5}
						width={8}
						className="aspect-square rotate-180 rounded-full"
					/>
					{valueFormatted}
				</div>
			)
		}
	}

	return <>{valueFormatted}</>
}
