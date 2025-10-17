import CampaignDetailedView from "./campaign-detailed-view"
import CampaignSizeAndReturn from "./campaign-size-and-return"

export default async function SizeAndReturnOfCampaign() {
	return (
		<section className="flex w-full flex-col gap-10 rounded-xl border border-solid border-gray-100 bg-white px-6 pb-10 pt-6 shadow-sm max-md:max-w-full max-md:px-5">
			<CampaignSizeAndReturn />
			<CampaignDetailedView />
		</section>
	)
}
