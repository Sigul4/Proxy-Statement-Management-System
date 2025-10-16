"use client"

import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from "@tanstack/react-table"
import Image from "next/image"
import { useMemo, useState } from "react"
import QuarterOverQuarterComparisonCell from "./quarter-over-quarter-comparison-cell"
import { QuarterOverQuarterComparisonHeader, QuarterOverQuarterComparisonItem } from "./types"

interface Props {
	data: QuarterOverQuarterComparisonItem[]
}

const columnHelper = createColumnHelper<QuarterOverQuarterComparisonItem>()

export const columns: ColumnDef<QuarterOverQuarterComparisonItem>[] = [
	{
		accessorKey: "ticker",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Ticker</div>
	},
	{
		accessorKey: "companyName",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Company name</div>,
		cell: ({ row }) => (
			<div className="flex w-full items-center gap-2 px-0">
				<Image
					src="/data-logos/apple-table-logo.png"
					alt="Company logo"
					height={20}
					width={20}
					className="aspect-square rounded-full"
				/>
				<span>{row.getValue("companyName")}</span>
			</div>
		)
	},
	{
		accessorKey: "class",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Class</div>
		// header: () => <div className="text-right">Amount</div>,
		// cell: ({ row }) => {
		// 	const amount = parseFloat(row.getValue("amount"))

		// 	// Format the amount as a dollar amount
		// 	const formatted = new Intl.NumberFormat("en-US", {
		// 		style: "currency",
		// 		currency: "USD"
		// 	}).format(amount)

		// 	return <div className="text-right font-medium">{formatted}</div>
		// }
	},
	{
		accessorKey: "cusip",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Cusip</div>
	},
	{
		accessorKey: "optionType",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Option type</div>
	},
	columnHelper.group({
		id: "shares",
		header: () => (
			<div className="h-full w-full text-center text-micro font-semibold tracking-wide text-[#777]">Shares</div>
		),
		columns: [
			{
				accessorKey: "sharesFirstQuarter",
				header: () => <div className="text-micro font-normal text-[#777]">Q1 2024</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} />
			},
			{
				accessorKey: "sharesLastQuarter",
				header: () => <div className="text-micro font-normal text-[#777]">Q4 2024</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} />
			},
			{
				accessorKey: "sharesDifference",
				header: () => <div className="text-micro font-normal text-[#777]">Difference</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} indicator />
			},
			{
				accessorKey: "sharesChange",
				header: () => <div className="text-micro font-normal text-[#777]">% Change</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} indicator percentatge />
			}
		]
	}),
	columnHelper.group({
		id: "value",
		header: () => (
			<div className="h-full w-full text-center text-micro font-semibold tracking-wide text-[#777]">Value</div>
		),
		columns: [
			{
				accessorKey: "valueFirstQuarter",
				header: () => <div className="text-micro font-normal text-[#777]">Q1 2024</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} />
			},
			{
				accessorKey: "valueLastQuarter",
				header: () => <div className="text-micro font-normal text-[#777]">Q4 2024</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} />
			},
			{
				accessorKey: "valueDifference",
				header: () => <div className="text-micro font-normal text-[#777]">Difference</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} indicator />
			},
			{
				accessorKey: "valueChange",
				header: () => <div className="text-micro font-normal text-[#777]">% Change</div>,
				cell: ({ cell }) => <QuarterOverQuarterComparisonCell cell={cell} indicator percentatge />
			}
		]
	})
]

export default function QuarterOverQuarterComparisonDataTable({ data }: Props) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection
		}
	})

	const columnsLength = useMemo(
		() =>
			columns.reduce((acc, column) => {
				const currentColumn: QuarterOverQuarterComparisonHeader = column
				if (currentColumn.columns) {
					return acc + currentColumn.columns.length
				}
				return acc + 1
			}, 0),
		[columns]
	)

	return (
		<div className="w-full">
			<div>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<th key={header.id} colSpan={header.colSpan} className="py-2 text-start text-xs">
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</TableHeader>
					<TableBody className="border-y">
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id} className="min-w-16 px-0 text-xs text-[#1B1B1B]">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columnsLength} className="h-24 p-0 text-center text-xs text-[#1B1B1B]">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
