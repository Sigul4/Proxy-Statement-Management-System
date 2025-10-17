"use client"

import { useUniverseActivityStore } from "../../_store/universe-activity-store"

export default function OpenActivitySituationsModalButton() {
	const setIsOpen = useUniverseActivityStore(state => state.setIsAllActivitySituationsModalOpen)

	return (
		<button
			className="cursor-pointer border-[#00000060] text-xs font-normal tracking-wider text-[#1B1B1B] underline underline-offset-8"
			onClick={() => setIsOpen(true)}
		>
			View all
		</button>
	)
}
