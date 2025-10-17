"use client"

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious
} from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel()
	})

	return (
		<div className="">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="flex items-center justify-between py-6">
				<p className="text-nowrap text-xs text-[#1B1B1B]">Total 7 pages</p>
				<Pagination>
					<PaginationContent>
						<span className="flex gap-2 text-nowrap text-xs text-[#1B1B1B]	">Show by:</span>

						<PaginationPrevious />

						<div className="flex items-center gap-2">
							<PaginationItem>1</PaginationItem>
							<PaginationItem>2</PaginationItem>
							<PaginationItem>3</PaginationItem>
							<PaginationItem>4</PaginationItem>
							<PaginationItem>5</PaginationItem>
							<PaginationItem>6</PaginationItem>
						</div>

						<PaginationNext />
					</PaginationContent>
				</Pagination>
				<p className="flex gap-2 text-nowrap  text-xs text-[#1B1B1B]	">
					Show by:
					<ul className="flex gap-2 font-normal">
						<li className="cursor-pointer font-semibold">10</li>
						<li className="cursor-pointer text-[#999]">20</li>
						<li className="cursor-pointer text-[#999]">50</li>
						<li className="cursor-pointer text-[#999]">100</li>
					</ul>
				</p>
			</div>
		</div>
	)
}
