"use client"

import { IconCalendar } from "@/components/icons/icon-calendar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useDataTimeFilterStore } from "../../../_components/data-time-filter/use-data-time-filter-store"
import { useUniverseActivityStore } from "../../_store/universe-activity-store"
import { CampaignsLaunchedFilter } from "../../types"
import DataRangeFilterMode from "./data-range-filter-mode"

export default function CampaignsLaunchedFilterDropdown() {
	const campaignsLaunchedFilter = useUniverseActivityStore(state => state.campaignsLaunchedFilter)
	const setCampaignsLaunchedFilter = useUniverseActivityStore(state => state.setCampaignsLaunchedFilter)

	const setIsOpen = useDataTimeFilterStore(state => state.setIsOpen)

	function handleCampaignsLaunchedClick(filter: CampaignsLaunchedFilter) {
		setCampaignsLaunchedFilter(filter)

		if (filter === "Custom data range") {
			setIsOpen(true)
		}
	}

	const isDailyOrMonthly = campaignsLaunchedFilter === "Daily" || campaignsLaunchedFilter === "Monthly"

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					id="campaigns-launched-all-time-filter-button"
					className="flex items-center gap-2 rounded-lg bg-[#F1F1F5] p-2 py-2 align-middle text-xs leading-5 tracking-wide text-[#1B1B1B] hover:bg-neutral-200"
				>
					<IconCalendar />
					<span className="my-auto flex-auto">{campaignsLaunchedFilter}</span>
					{isDailyOrMonthly && (
						<div className="ml-1">
							<DataRangeFilterMode />
						</div>
					)}
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-3 text-xs font-light text-[#777]">
				<DropdownMenuItem className="cursor-pointer" onClick={() => handleCampaignsLaunchedClick("All Time")}>
					All Time
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" onClick={() => handleCampaignsLaunchedClick("Monthly")}>
					Monthly
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" onClick={() => handleCampaignsLaunchedClick("Daily")}>
					Daily
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" onClick={() => handleCampaignsLaunchedClick("Custom data range")}>
					Custom data range
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
