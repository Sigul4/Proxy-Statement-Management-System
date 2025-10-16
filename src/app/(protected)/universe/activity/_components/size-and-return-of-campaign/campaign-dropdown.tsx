"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useUniverseActivityStore } from "../../_store/universe-activity-store"

export default function CampaignDropdown() {
	const isCampaignResultsInformationOpen = useUniverseActivityStore(state => state.isCampaignResultsInformationOpen)
	const setIsCampaignResultsInformationOpen = useUniverseActivityStore(
		state => state.setIsCampaignResultsInformationOpen
	)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Image
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bc9590-3be7-4948-a834-72886cc574bc?apiKey=5f8994111c6b47bebafe2e8e54615883&"
					alt="Campaign Logo"
					className="aspect-square w-[30px] shrink-0 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80"
					unoptimized
					width={30}
					height={30}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-64">
				<DropdownMenuItem onClick={() => setIsCampaignResultsInformationOpen(!isCampaignResultsInformationOpen)}>
					{isCampaignResultsInformationOpen ? "Hide" : "Show"} campaign information
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
