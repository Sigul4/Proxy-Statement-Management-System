import CampaignInvestmentReturnsChart from "./campaign-investment-returns-chart"
import CampaignInvestmentReturnsLegend from "./campaign-investment-returns-legend"
import CampaignInvestmentReturnsTabs from "./campaign-investment-returns-tabs"
import ShareCampaignInvestmentReturnsButton from "./share-campaign-investment-returns-button"
import ShowAbnormalReturnSwitch from "./show-abnormal-return-switch"

export default function CampaignInvestmentReturns() {
	return (
		<section className="flex w-full grow flex-col gap-10 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-8">
					<div className="flex items-center gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Campaign Investment Returns</p>
						<CampaignInvestmentReturnsTabs />
						<ShowAbnormalReturnSwitch />
					</div>
					<div className="flex gap-6">
						<CampaignInvestmentReturnsLegend />
						<ShareCampaignInvestmentReturnsButton />
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<CampaignInvestmentReturnsChart />
			</div>
		</section>
	)
}
