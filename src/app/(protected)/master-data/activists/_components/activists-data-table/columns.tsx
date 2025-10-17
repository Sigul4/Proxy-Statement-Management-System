"use client"

import WishlistButton from "@/components/wishlist-button"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { ActivistItem } from "../../types"

export const ACTIVISTS_COLUMNS: ColumnDef<ActivistItem>[] = [
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ row }) => {
			const { countryImageSrc, activistImageSrc, name } = row.original

			return (
				<div className="flex items-center gap-2">
					<Image src={countryImageSrc} width={16} height={16} alt="country" unoptimized />
					<Image src={activistImageSrc} width={16} height={16} alt="Activist image" unoptimized />
					{name}
				</div>
			)
		}
	},
	{
		accessorKey: "type",
		header: "Type"
	},
	{
		accessorKey: "focus",
		header: "Focus"
	},
	{
		accessorKey: "campaigns",
		header: "Campaigns"
	},
	{
		accessorKey: "aum",
		header: "Aum"
	},
	{
		accessorKey: "trailing13dReturn1day",
		header: "Objective"
	},
	{
		accessorKey: "trailing13dReturn1year",
		header: "Market cap"
	},
	{
		accessorKey: "trailing13dReturn3year",
		header: "Position size"
	},
	{
		accessorKey: "trailing13dAbnormalReturn1year",
		header: "Stake"
	},
	{
		accessorKey: "trailing13dAbnormalReturn3day",
		header: "Return"
	},
	{
		accessorKey: "portfolioFollowerAbnormalReturn1year",
		header: "Abnormal return"
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
