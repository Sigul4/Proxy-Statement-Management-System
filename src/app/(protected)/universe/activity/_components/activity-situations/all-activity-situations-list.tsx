import { useMemo, useState } from "react"
import { ActivitySituation } from "../../types"
import ActivitySituationsItem from "./activity-situations-item"

const MAX_ITEMS_PER_PAGE = 10

export default function AllActivitySituationsContent({ data = [] }: { data: ActivitySituation[] }) {
	const [page, setPage] = useState(1)

	const pagesCount = useMemo(() => Math.ceil(data.length / MAX_ITEMS_PER_PAGE), [data])

	const pageItems = useMemo(() => data.slice((page - 1) * MAX_ITEMS_PER_PAGE, page * MAX_ITEMS_PER_PAGE), [data, page])

	const currentStartItemIndex = useMemo(() => (page - 1) * MAX_ITEMS_PER_PAGE + 1, [page])
	const currentEndItemIndex = useMemo(() => (page - 1) * MAX_ITEMS_PER_PAGE + pageItems.length, [page, pageItems])

	return (
		<>
			<div className="flex min-h-[24rem] flex-col gap-5 overflow-auto py-6">
				{pageItems.map((item, index) => (
					<ActivitySituationsItem key={item.activistName + item.targetCompanyName + index} item={item} />
				))}
			</div>
			<div className="flex items-center justify-between border-t pt-4">
				<p className="cursor-pointer text-xs font-normal tracking-wide text-[#1B1B1B]">
					Shown
					<span className="mx-1 font-semibold">
						{currentStartItemIndex}-{currentEndItemIndex}
					</span>
					items
				</p>
				<div className="flex gap-1">
					{Array.from({ length: pagesCount }).map((_, index) => (
						<button
							key={index}
							className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-xs font-semibold tracking-wide text-[#274B56] ${
								page === index + 1 ? "bg-[#274B56] text-white" : "bg-white"
							}`}
							onClick={() => setPage(index + 1)}
						>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		</>
	)
}
