import { LengthOfCampaignsChart } from "./length-of-campaigns-chart"
import LengthOfCampaignsLegend from "./length-of-campaigns-legend"
import ShareLengthOfCampaignsButton from "./share-length-of-campaigns-button"

export default function LengthOfCampaigns() {
	return (
		<section className="flex w-full grow flex-col gap-6 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-5">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Length of campaigns</p>
					</div>
					<div className="flex gap-6">
						<LengthOfCampaignsLegend />
						<ShareLengthOfCampaignsButton />
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<LengthOfCampaignsChart />
			</div>
		</section>
	)
}
