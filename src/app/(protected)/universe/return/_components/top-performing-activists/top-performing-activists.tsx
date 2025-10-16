import Image from "next/image"

const data = [
	{
		activist: "Icahn Enterprises",
		activistIcon: "/data-logos/icahn-enterprises.png",
		weightedAverageReturnOnCampaigns: 32.2,
		weightedAverageAlphaOnCampaigns: 24.5
	},
	{
		activist: "Caligan Partners",
		activistIcon: "/data-logos/caligan-partners.png",
		weightedAverageReturnOnCampaigns: 23.6,
		weightedAverageAlphaOnCampaigns: 10.2
	},
	{
		activist: "Starboard Value",
		activistIcon: "/data-logos/starboard-value.png",
		weightedAverageReturnOnCampaigns: 20.2,
		weightedAverageAlphaOnCampaigns: 7.3
	},
	{
		activist: "Saba Capital",
		activistIcon: "/data-logos/saba-capital.png",
		weightedAverageReturnOnCampaigns: 12.0,
		weightedAverageAlphaOnCampaigns: 6.2
	},
	{
		activist: "Elliott Investment",
		activistIcon: "/data-logos/elliot-investment.png",
		weightedAverageReturnOnCampaigns: 11.8,
		weightedAverageAlphaOnCampaigns: 7.3
	}
]

const columns = ["Activist", "Weighted average return on campaigns", "Weighted average alpha on campaigns"]

export function TopPerformingActivists() {
	return (
		<section className="flex w-full grow flex-col gap-4 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-8">
					<div className="flex items-center gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Top-performing Activists</p>
					</div>
				</div>
				<div className="flex flex-grow gap-5"></div>
			</header>
			<div className="w-full">
				<table className="w-full border-separate border-spacing-y-2">
					<thead>
						<tr>
							{columns.map((column, index) => (
								<th className="pb-4 text-start text-megamicro font-normal tracking-[0.32px] text-[#777]" key={index}>
									<div className="flex h-4 items-start gap-2">
										<span>{column}</span>
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((row, index) => (
							<tr key={index} className="text-xs font-normal tracking-[0.48px] text-[#1B1B1B] ">
								<td className="w-60">
									<div className="flex items-center gap-2">
										<Image src={row.activistIcon} width={24} height={24} alt="Activist icon" unoptimized />
										<span>{row.activist}</span>
									</div>
								</td>
								<td className="font-semibold tracking-[0.48px] text-[#1B1B1B]">
									{row.weightedAverageReturnOnCampaigns ? `${row.weightedAverageReturnOnCampaigns}%` : "-"}
								</td>
								<td className="font-semibold tracking-[0.48px] text-[#1B1B1B]">
									{row.weightedAverageAlphaOnCampaigns ? `${row.weightedAverageAlphaOnCampaigns}%` : "-"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
