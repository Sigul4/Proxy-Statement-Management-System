import { SectionCard } from "@/components/section-card"
import { getActivitySituations } from "../../actions"
import ActivitySituationsItem from "./activity-situations-item"
import AllActivitySituationsModal from "./all-activity-situations-modal"
import OpenActivitySituationsModalButton from "./open-activity-situations-modal-button"

export default async function ActivitySituations() {
	const data = await getActivitySituations()

	const listData = data.slice(0, 4)

	return (
		<>
			<SectionCard title="Activist Situations" toolbar={<OpenActivitySituationsModalButton />}>
				<ul className="flex w-full flex-col gap-6">
					{listData.map((item, index) => (
						<ActivitySituationsItem key={item.activistName + item.targetCompanyName + index} item={item} />
					))}
				</ul>
			</SectionCard>
			<AllActivitySituationsModal data={data} />
		</>
	)
}
