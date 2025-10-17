"use client"

import { useUniverseActivityStore } from "../../_store/universe-activity-store"
import { TopTenLargestCampaigns, TopTenMostActive } from "../../types"
import LargestCampaigns from "./largest-campaigns"
import MostActive from "./most-active"

interface Props {
	mostActiveData: TopTenMostActive[]
	largestCampaignsData: TopTenLargestCampaigns[]
}

export default function TopTenContent({ mostActiveData, largestCampaignsData }: Props) {
	const tab = useUniverseActivityStore(state => state.topTenCurrentTab)

	if (tab === "mostActive") return <MostActive data={mostActiveData} />
	return <LargestCampaigns data={largestCampaignsData} />
}
