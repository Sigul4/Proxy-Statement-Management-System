import DemandsChart from "./demands-chart"

export default function Demands() {
	return (
		<section className="flex w-full grow flex-col gap-4 rounded-xl border border-solid border-gray-100 bg-white px-6 py-6 shadow-sm max-md:max-w-full max-md:px-5">
			<header className="flex w-full flex-col items-start justify-between gap-4 text-neutral-400 max-md:max-w-full max-md:flex-wrap">
				<div className="mt-2 flex w-full items-center justify-between gap-5">
					<div className="flex gap-6 self-stretch text-zinc-900">
						<div className="text-lg font-semibold tracking-wider">Demands</div>
						{/* <CampaignsLaunchedToolbar /> */}
					</div>
					<div>{/* <ShareCampaignsLaunchedButton /> */}</div>
				</div>
				{/* <AllTimeFilterButton /> */}
			</header>
			<DemandsChart />
		</section>
	)
}
