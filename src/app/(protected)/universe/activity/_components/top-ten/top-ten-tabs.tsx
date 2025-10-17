"use client"

import { cn } from "@/lib/utils"
import { useUniverseActivityStore } from "../../_store/universe-activity-store"
import type { TopTenTabs } from "../../types"

export default function TopTenTabs() {
	const tab = useUniverseActivityStore(state => state.topTenCurrentTab)
	const setTab = useUniverseActivityStore(state => state.setTopTenCurrentTab)

	function handleChangeTab(newTab: TopTenTabs) {
		if (tab === newTab) return
		setTab(newTab)
	}

	return (
		<div className="flex justify-between gap-5">
			<div className="flex flex-col">
				<button
					className={cn("text-sm tracking-wide text-neutral-500", {
						"self-start font-semibold text-zinc-900 underline underline-offset-8 max-md:ml-2.5": tab === "mostActive"
					})}
					onClick={() => handleChangeTab("mostActive")}
				>
					Most Active
				</button>
			</div>
			<div className="flex flex-col">
				<button
					className={cn("text-sm tracking-wide text-neutral-500", {
						"self-start font-semibold text-zinc-900 underline underline-offset-8 max-md:ml-2.5":
							tab === "largestCampaigns"
					})}
					onClick={() => handleChangeTab("largestCampaigns")}
				>
					Largest Campaigns
				</button>
			</div>
		</div>
	)
}
