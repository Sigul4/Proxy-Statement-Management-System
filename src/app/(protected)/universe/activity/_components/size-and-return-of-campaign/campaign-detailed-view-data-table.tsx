"use client"

import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	VisibilityState
} from "@tanstack/react-table"
import { useState } from "react"
import { SizeAndReturnOfCampaignDetailed } from "../../types"
import TrendIndicatorCell from "./trend-indicator-cell"

const columns: ColumnDef<SizeAndReturnOfCampaignDetailed>[] = [
	{
		accessorKey: "activistName",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Activist Investor</div>,
		cell: ({ row }) => (
			<div className="flex items-center gap-2 text-start font-medium">
				<div className="size-3 rounded-full bg-gray-300"></div>
				{row.getValue("activistName")}
			</div>
		)
	},
	{
		accessorKey: "targetCompanyName",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Target Company</div>
	},
	// {
	// 	accessorKey: "division",
	// 	header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Division</div>
	//  cell: ({ row }) => {
	//  	const amount = parseFloat(row.getValue("amount"))

	//  	// Format the amount as a dollar amount
	//  	const formatted = new Intl.NumberFormat("en-US", {
	//  		style: "currency",
	//  		currency: "USD"
	//  	}).format(amount)

	//  	return <div className="text-right font-medium">{formatted}</div>
	//  }
	// },
	{
		accessorKey: "firstFilingDate",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">First Filing Date</div>
	},
	{
		accessorKey: "lastFilingDate",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Last Filing Date</div>
	},
	// {
	// 	accessorKey: "campaignLength",
	// 	header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Last Filing Date</div>
	// }
	{
		accessorKey: "firstFilingPctOfClass",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Shares %</div>
	},
	{
		accessorKey: "return",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Campaign Performance</div>,
		cell: ({ cell }) => <TrendIndicatorCell cell={cell} />
	},
	{
		accessorKey: "abnormalReturn",
		header: () => <div className="w-full text-start text-micro font-normal text-[#777]">Abnormal Return</div>,
		cell: ({ cell }) => <TrendIndicatorCell cell={cell} />
	}
]

interface Props {
	data: SizeAndReturnOfCampaignDetailed[]
}

export default function CampaignDetailedViewDataTable({ data }: Props) {
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
								<TableCell colSpan={columns.length} className="h-24 p-0 text-center text-xs text-[#1B1B1B]">
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
