"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { slugify } from "@/utils/utils"
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	Row,
	useReactTable
} from "@tanstack/react-table"
import { useRouter } from "next/navigation"
import { ActivistItem } from "../../types"
import DataTablePagination from "./data-table-pagination"

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export default function ActivistsDataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const router = useRouter()

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 20
			}
		}
	})

	function handleRowClicked(row: Row<TData>) {
		const originalItem = row.original as ActivistItem
		const activistName = originalItem.activistName

		const activistNameSlug = slugify(activistName)

		router.push(`/master-data/activists/${activistNameSlug}`)
	}

	return (
		<div>
			<div className="w-full rounded-md">
				<Table className="w-full overflow-x-auto">
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead
											key={header.id}
											className="min-w-28 px-4 text-xs text-neutral-500 first-of-type:min-w-12"
										>
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
								<TableRow
									key={row.id}
									className="cursor-pointer hover:bg-neutral-100"
									data-state={row.getIsSelected() && "selected"}
									onClick={() => handleRowClicked(row)}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id} className="text-nowrap px-4 py-3 text-xs text-muted-foreground">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
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
			</div>
			<DataTablePagination table={table} />
		</div>
	)
}
