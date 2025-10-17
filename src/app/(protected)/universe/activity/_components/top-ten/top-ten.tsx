import { getTop10, getTop10LargestCampaigns } from "../../actions"
import TopTenContent from "./top-ten-content"
import TopTenTabs from "./top-ten-tabs"

export default async function TopTen() {
	const mostActiveData = await getTop10()
	const largestCampaignsData = await getTop10LargestCampaigns()

	return (
		<section className="flex w-full grow flex-col gap-4 rounded-xl border border-solid border-gray-100 bg-white px-6 pb-5 pt-6 shadow-sm max-md:max-w-full max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex flex-col self-start whitespace-nowrap">
					<div className="text-lg font-semibold tracking-wider text-zinc-900">Top-10</div>
				</div>
				<TopTenTabs />
			</header>
			<div className="w-full overflow-x-auto">
				<TopTenContent mostActiveData={mostActiveData} largestCampaignsData={largestCampaignsData} />
			</div>
		</section>
	)
}
