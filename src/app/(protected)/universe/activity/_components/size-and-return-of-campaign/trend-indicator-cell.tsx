import { Cell } from "@tanstack/react-table"
import Image from "next/image"
import { SizeAndReturnOfCampaignDetailed } from "../../types"

export default function TrendIndicatorCell({ cell }: { cell: Cell<SizeAndReturnOfCampaignDetailed, any> }) {
	let value = cell.getValue()

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
				{value}
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
				{value}
			</div>
		)
	}

	return <>{value}</>
}
