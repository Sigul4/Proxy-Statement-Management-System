"use client"

import { Information } from "../../_components/information"
import { useUniverseActivityStore } from "../_store/universe-activity-store"

export default function InformationCampaignResults() {
	const isCampaignResultsInformationOpen = useUniverseActivityStore(state => state.isCampaignResultsInformationOpen)
	const setIsCampaignResultsInformationOpen = useUniverseActivityStore(
		state => state.setIsCampaignResultsInformationOpen
	)

	return (
		<Information
			description="The chart shows the size and return of various campaigns using a treemap. The size of each box represents the campaign's size, while the color indicates the return: green shades for positive returns, red for negative, and neutral for near-zero returns. Larger boxes indicate larger campaigns, and darker colors show more extreme returns. This allows for quick comparison of campaign sizes and their respective returns."
			isOpen={isCampaignResultsInformationOpen}
			setIsOpen={() => setIsCampaignResultsInformationOpen(false)}
		/>
	)
}
