"use client"

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { useUniverseActivityStore } from "../../_store/universe-activity-store"
import { ActivitySituation } from "../../types"
import AllActivitySituationsContent from "./all-activity-situations-list"

export default function AllActivitySituationsModal({ data = [] }: { data: ActivitySituation[] }) {
	const isOpen = useUniverseActivityStore(state => state.isAllActivitySituationsModalOpen)
	const setIsOpen = useUniverseActivityStore(state => state.setIsAllActivitySituationsModalOpen)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="min-w-[50rem]">
				<DialogHeader>
					<h2 className="text-lg font-semibold tracking-wider">Activist Situations</h2>
				</DialogHeader>
				<AllActivitySituationsContent data={data} />
			</DialogContent>
		</Dialog>
	)
}
