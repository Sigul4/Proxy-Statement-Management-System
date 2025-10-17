import Image from "next/image"

const ITEMS = [
	{
		iconSrc: "/icons/icon-arrow-down-stock.svg",
		value: "+ 10%",
		label: "Selected period"
	},
	{
		iconSrc: "/icons/icon-arrow-up-stock.svg",
		value: "121.87%",
		label: "Campaign return"
	},
	{
		iconSrc: "/icons/icon-arrow-up-stock.svg",
		value: "316.87%",
		label: "Return since initial filing"
	}
]

export default function CampaignEvolutionTicker() {
	return (
		<div className="w-fit">
			<div className="flex items-center justify-between gap-16 px-4 py-2">
				{ITEMS.map((item, index) => (
					<article key={index} className="flex flex-col gap-2">
						<div className="flex gap-2">
							<Image src={item.iconSrc} alt="Arrow up" width={16} height={16} unoptimized />
							<p className="ml-2 text-4xl font-normal text-gray-700">{item.value}</p>
						</div>
						<footer className="ml-2 text-sm text-gray-500">{item.label}</footer>
					</article>
				))}
			</div>
		</div>
	)
}
