import { getSizeAndReturnOfCampaignData } from "../../actions"
import CampaignDropdown from "./campaign-dropdown"
import CampaignTreemap from "./campaign-treemap"

export default async function CampaignSizeAndReturn() {
	const data = await getSizeAndReturnOfCampaignData()

	return (
		<div className="flex flex-col gap-4">
			<header className="flex gap-5 text-lg font-semibold tracking-wider text-zinc-900 max-md:max-w-full max-md:flex-wrap">
				<div className="my-auto flex-auto">Size and return of campaign</div>
				<CampaignDropdown />
			</header>
			<CampaignTreemap data={data} />
		</div>
	)
}
