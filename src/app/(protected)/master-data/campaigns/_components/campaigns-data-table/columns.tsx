"use client"

import WishlistButton from "@/components/wishlist-button"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { CampaignsItem } from "../../types"

export const CAMPAIGNS_COLUMNS: ColumnDef<CampaignsItem>[] = [
	{
		accessorKey: "country",
		header: "",
		cell: ({ row }) => {
			const { countryImageSrc } = row.original

			return (
				<div className="flex items-center gap-2">
					<Image src={countryImageSrc} width={16} height={16} alt="country" unoptimized />
				</div>
			)
		}
	},
	{
		accessorKey: "fillingsDate",
		header: "Fillings date"
	},
	{
		accessorKey: "closing",
		header: "Closing (stake end)"
	},
	{
		accessorKey: "activist",
		header: "Activist",
		cell: ({ row }) => {
			const { activist, activistImageSrc } = row.original

			return (
				<div className="flex items-center gap-2">
					<Image src={activistImageSrc} width={16} height={16} alt="activist" className="rounded-full" unoptimized />
					{activist}
				</div>
			)
		}
	},
	{
		accessorKey: "target",
		header: "Target",
		cell: ({ row }) => {
			const { target, targetImageSrc } = row.original

			return (
				<div className="flex items-center gap-2">
					<Image src={targetImageSrc} width={16} height={16} alt="target" className="rounded-full" unoptimized />
					{target}
				</div>
			)
		}
	},
	{
		accessorKey: "objective",
		header: "Objective"
	},
	{
		accessorKey: "marketCap",
		header: "Market cap"
	},
	{
		accessorKey: "positionSize",
		header: "Position size"
	},
	{
		accessorKey: "stake",
		header: "Stake"
	},
	{
		accessorKey: "return",
		header: "Return"
	},
	{
		accessorKey: "abnormalReturn",
		header: "Abnormal return"
	},
	{
		accessorKey: "proxyContestDate",
		header: "Proxy contest date"
	},
	{
		accessorKey: "settlementDate",
		header: "Settlement date"
	},
	{
		accessorKey: "outcome",
		header: "Outcome"
	},
	{
		id: "actions",
		cell: () => {
			return (
				<div className="flex justify-end">
					<WishlistButton onWishlist={() => console.log("wishlist")} />
				</div>
			)
		}
	}
]
