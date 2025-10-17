"use client"

import { IconShare } from "@/components/icons/icon-share"
import download from "downloadjs"
import * as htmlToImage from "html-to-image"
import { useUniverseActivityStore } from "../../_store/universe-activity-store"

export function ShareCampaignsLaunchedButton() {
	const campaignsLaunchedChart = useUniverseActivityStore(state => state.campaignsLaunchedChart)

	function handleShare() {
		if (!campaignsLaunchedChart) return

		const now = Date.now()
		const fileName = `campaigns-launched-${now}`
		const domCard = document.getElementById("campaigns-launched-section")
		if (!domCard) return

		htmlToImage
			.toPng(domCard, {
				filter: node =>
					node.id !== "campaigns-launched-all-time-filter-button" && node.id !== "campaigns-launched-toolbar"
			})
			.then(function (dataUrl) {
				download(dataUrl, `${fileName}.png`)
			})
	}

	return (
		<button
			className="flex items-center rounded-md bg-[#F1F1F5] p-2 text-neutral-500 hover:bg-neutral-200"
			onClick={handleShare}
		>
			<IconShare />
		</button>
	)
}
