import { getSizeAndReturnOfCampaignDetailedData } from "../../actions"
import CampaignDetailedViewDataTable from "./campaign-detailed-view-data-table"
import CampaignDropdown from "./campaign-dropdown"

export default async function CampaignDetailedView() {
	const data = await getSizeAndReturnOfCampaignDetailedData()

	return (
		<div className="flex flex-col gap-2">
			<header className="flex gap-5 text-lg font-semibold tracking-wider text-zinc-900 max-md:max-w-full max-md:flex-wrap">
				<div className="my-auto flex-auto">Detailed view</div>
				<CampaignDropdown />
			</header>
			<CampaignDetailedViewDataTable data={data} />
		</div>
	)
}
