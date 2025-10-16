"use client"

import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { enIE } from "date-fns/locale"
import { useDataTimeFilterStore } from "./use-data-time-filter-store"

export function DataTimeFilterStoreDialog() {
	const isOpen = useDataTimeFilterStore(state => state).isOpen
	const setIsOpen = useDataTimeFilterStore(state => state.setIsOpen)
	const date = useDataTimeFilterStore(state => state.dataRange)
	const setDate = useDataTimeFilterStore(state => state.setDataRange)

	// const numberOfMonths = date?.to?.getMonth() - date?.from?.getMonth() + 1

	if (!isOpen) return <></>

	function handleSetDate(dateRange: any) {
		setDate(dateRange.from, dateRange.to)
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="flex min-h-96 w-full flex-col gap-8 md:max-w-xl lg:max-w-4xl">
				<DialogHeader>
					<div className="flex items-start gap-6">
						<h2 className="text-xl font-bold tracking-wider">Custom data range</h2>
						<div className="flex gap-6">
							<div className="flex gap-2 text-sm">
								<span>
									02 March <span className="text-neutral-400">2024</span>
								</span>
								<span>-</span>
								<span>
									09 March <span className="text-neutral-400">2024</span>
								</span>
							</div>
							<div className="flex items-center justify-center gap-4 text-sm">
								<button className="text-neutral-600 underline underline-offset-8">Clear</button>
								<button className="text-neutral-600 underline underline-offset-8">Save</button>
							</div>
						</div>
					</div>
				</DialogHeader>
				<div className="flex">
					<div className="h-full w-72 border-r pr-8">
						<ul className="text-sm text-neutral-500">
							<li className="border-b py-2 text-neutral-300">Custom</li>
							<li className="border-b py-2">Last quarter</li>
							<li className="border-b py-2">Last month</li>
							<li className="border-b py-2">Last 7 days</li>
						</ul>
					</div>
					<div className="flex w-full justify-center overflow-x-auto px-6">
						<Calendar
							mode="range"
							captionLayout="buttons"
							numberOfMonths={2}
							selected={date!}
							onSelect={handleSetDate}
							defaultMonth={date.from}
							className="p-0"
							locale={enIE}
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
