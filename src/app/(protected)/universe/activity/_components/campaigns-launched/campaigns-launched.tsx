import { getCampaignsLaunched } from "../../actions"
import { AllTimeFilterButton } from "./all-time-filter-button"
import { CampaignsLaunchedChart } from "./campaigns-launched-chart"
import { CampaignsLaunchedToolbar } from "./campaigns-launched-toolbar"
import { ShareCampaignsLaunchedButton } from "./share-campaigns-launched-button"

export default async function CampaignsLaunched() {
	const data = await getCampaignsLaunched()

	return (
		<section
			id="campaigns-launched-section"
			className="flex w-full grow flex-col gap-4 rounded-xl border border-solid border-gray-100 bg-white px-6 py-6 shadow-sm max-md:max-w-full max-md:px-5"
		>
			<header className="flex w-full flex-col items-start justify-between gap-4 text-neutral-400 max-md:max-w-full max-md:flex-wrap">
				<div className="mt-2 flex w-full items-center justify-between gap-5">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<div className="text-lg font-semibold tracking-wider">Campaigns Launched</div>
						<CampaignsLaunchedToolbar />
					</div>
					<div id="campaigns-launched-toolbar">
						<ShareCampaignsLaunchedButton />
					</div>
				</div>
				<AllTimeFilterButton />
			</header>
			<CampaignsLaunchedChart data={data} />
		</section>
	)
}
