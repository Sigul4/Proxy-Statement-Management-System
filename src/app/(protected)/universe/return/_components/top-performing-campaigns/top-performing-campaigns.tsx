import Image from "next/image"

const data = [
	{
		activist: "Icahn Enterprises",
		activistIcon: "/data-logos/icahn-enterprises.png",
		target: "CVR Partners, LP",
		targetIcon: "/data-logos/cvr-partners-lp.png",
		totalReturn: 28.1,
		alpha: 24.5
	},
	{
		activist: "Icahn Enterprises",
		activistIcon: "/data-logos/icahn-enterprises.png",
		target: "JetBlue Airways",
		targetIcon: "/data-logos/jetblue-airways.png",
		totalReturn: 14.6,
		alpha: 18.4
	},
	{
		activist: "Corvex Management",
		activistIcon: "/data-logos/corvex-management.png",
		target: "Vestis",
		targetIcon: "/data-logos/vestis.png",
		totalReturn: 17.8
	},
	{
		activist: "Saba Capital",
		activistIcon: "/data-logos/saba-capital.png",
		target: "Coca Cola",
		targetIcon: "/data-logos/coca-cola.png",
		totalReturn: 12.3,
		alpha: 1.0
	},
	{
		activist: "Saba Capital",
		activistIcon: "/data-logos/saba-capital.png",
		target: "Black Rock",
		targetIcon: "/data-logos/black-rock.png",
		totalReturn: 9.64,
		alpha: 0.1
	}
]

const columns = ["Activist", "Target", "Total return", "Alpha"]

export function TopPerformingCampaigns() {
	return (
		<section className="flex w-full grow flex-col gap-4 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-8">
					<div className="flex items-center gap-6 self-stretch text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Top-performing Campaigns</p>
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
								<td>
									<div className="flex items-center gap-2">
										<Image src={row.activistIcon} width={24} height={24} alt="Activist icon" unoptimized />
										<span>{row.activist}</span>
									</div>
								</td>
								<td>
									<div className="flex items-center gap-2">
										<Image src={row.targetIcon} width={24} height={24} alt="Target icon" unoptimized />
										<span>{row.target}</span>
									</div>
								</td>
								<td className="font-semibold tracking-[0.48px] text-[#1B1B1B]">
									{row.totalReturn ? `${row.totalReturn}%` : "-"}
								</td>
								<td className="font-semibold tracking-[0.48px] text-[#1B1B1B]">{row.alpha ? `${row.alpha}%` : "-"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
