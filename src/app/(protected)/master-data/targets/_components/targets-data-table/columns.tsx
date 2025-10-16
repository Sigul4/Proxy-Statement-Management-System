"use client"

import WishlistButton from "@/components/wishlist-button"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { TargetItem } from "../../types"

export const TARGETS_COLUMNS: ColumnDef<TargetItem>[] = [
	{
		accessorKey: "ticker",
		header: "Ticker",
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
		accessorKey: "companyName",
		header: "Company name"
	},
	{
		accessorKey: "industry",
		header: "Industry"
	},
	{
		accessorKey: "sector",
		header: "Sector"
	},
	{
		accessorKey: "marketCap",
		header: "Market Cap"
	},
	{
		accessorKey: "revenueGrowth",
		header: "Revenue growth",
		cell: ({ row }) => {
			const value = row.original.revenueGrowth
			return <span>{value}%</span>
		}
	},
	{
		accessorKey: "forwardPe",
		header: "Forward P/E"
	},
	{
		accessorKey: "forwardEvEbitda",
		header: "Forward EV/EBITDA"
	},
	{
		accessorKey: "priceBook",
		header: "Price/book"
	},
	{
		accessorKey: "ltmEvSales",
		header: "LTM EV/Sales"
	},
	{
		accessorKey: "ltmEbidtaOperatingMargin",
		header: "LTM EBITDA/Operating margin",
		cell: ({ row }) => {
			const value = row.original.ltmEbidtaOperatingMargin
			return <span>{value}%</span>
		}
	},
	{
		accessorKey: "fiveYearTsr",
		header: "5-year TSR",
		cell: ({ row }) => {
			const value = row.original.fiveYearTsr
			return <span>{value}%</span>
		}
	},
	{
		accessorKey: "threeYearTsr",
		header: "3-year TSR",
		cell: ({ row }) => {
			const value = row.original.threeYearTsr
			return <span>{value}%</span>
		}
	},
	{
		accessorKey: "twoYearTsr",
		header: "2-year TSR",
		cell: ({ row }) => {
			const value = row.original.twoYearTsr
			return <span>{value}%</span>
		}
	},
	{
		accessorKey: "oneYearTsr",
		header: "1-year TSR",
		cell: ({ row }) => {
			const value = row.original.oneYearTsr
			return <span>{value}%</span>
		}
	},
	{
		accessorKey: "sixMonthsTsr",
		header: "6-months TSR",
		cell: ({ row }) => {
			const value = row.original.sixMonthsTsr
			return <span>{value}%</span>
		}
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
