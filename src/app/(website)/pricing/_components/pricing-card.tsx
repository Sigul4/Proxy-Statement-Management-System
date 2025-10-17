import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { firstToUpper } from "@/utils/text-utils"
import IconQuestion from "./icon-question"

export default function PricingCard({
	name,
	price,
	pricingPeriods,
	features
}: {
	name: string
	price: number | null
	pricingPeriods: string[]
	features: { title: string; description: string }[]
}) {
	return (
		<article className="z-0 flex flex-col justify-between rounded-3xl border-2 border-[#ECF1F2] bg-white pt-9 shadow-sm">
			<header className="flex flex-col gap-8">
				<h3 className="text-2xl font-semibold tracking-[1.2px] text-[#274B56]">{name}</h3>
				<div className="relative">
					<div>
						<Tabs defaultValue={pricingPeriods[0]}>
							<TabsList>
								{pricingPeriods.map((pricingPeriod, index) => (
									<TabsTrigger key={index} value={pricingPeriod} className="w-28 text-sm tracking-[0.7px]">
										{firstToUpper(pricingPeriod)}
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>
					<div className="absolute top-4 -z-10 h-[2px] w-full bg-[#F1F1F5]"></div>
				</div>
				<div className="flex h-28 flex-col items-center py-4">
					<h4 className="text-2xl font-semibold tracking-[1.2px] text-[#3A3A3A]">
						{price ? `$${price}` : "Contact us"}
					</h4>
					<span className="text-sm font-normal text-neutral-500">/ billed {pricingPeriods[0]}</span>
				</div>
			</header>
			<ul className="flex-1 bg-[#ECF5F9] px-12 py-8">
				{features.map((feature, index) => (
					<li key={index} className="mb-6 flex flex-col  px-2 text-start">
						<div className="flex flex-row items-center gap-4">
							<IconQuestion />
							<span className="font-normal">{feature.title}</span>
						</div>
						<span className=" ml-[30px] text-xs font-light text-slate-400">{feature.description}</span>
					</li>
				))}
			</ul>
			<footer className="flex items-center justify-center p-4">
				<button className="w-full rounded-lg bg-[#274B56] py-3 text-white">Subscribe</button>
			</footer>
		</article>
	)
}
