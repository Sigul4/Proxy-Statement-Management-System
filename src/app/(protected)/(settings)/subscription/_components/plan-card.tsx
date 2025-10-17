import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GroupSvg from "./group-svg"

export default function PlanCard({
	plan
}: {
	plan: { name: string; billingOptions: string[]; price: string | null; description: string[] }
}) {
	const price = plan.price ? `$${plan.price}` : "Request"

	return (
		<article className="flex w-64 flex-col justify-center rounded-xl border border-[#F1F1F5] shadow-md">
			<header className="py-7">
				<h2 className="text-center text-xl font-semibold tracking-[0.72px] text-[#4F6871]">{plan.name}</h2>
			</header>
			<div className="flex w-full justify-center">
				<Tabs defaultValue={plan.billingOptions[0]} className="flex w-[400px] justify-center">
					<TabsList>
						{plan.billingOptions.map((option, i) => (
							<TabsTrigger key={i} value={option}>
								{option}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
			</div>
			<div className="flex flex-col gap-2 py-12 text-center">
				<h3 className="text-2xl font-normal tracking-[0.96px] text-[#1B1B1B]">{price}</h3>
				<p className="text-xs text-[#999]">/billed monthly</p>
			</div>
			<div className="flex flex-col gap-4 bg-neutral-100 bg-opacity-80 px-6 py-6">
				<ul className="flex list-none flex-col gap-3">
					<li className="flex items-start gap-2 text-xs text-[#1B1B1B]">
						<GroupSvg />
						Universe + Focus
					</li>
					<li className="flex items-start gap-2 text-xs text-[#1B1B1B]">
						<GroupSvg />
						Watermarks in downloads
					</li>
					<li className="flex items-start gap-2 text-xs text-[#1B1B1B]">
						<GroupSvg />
						Ads
					</li>
				</ul>
			</div>
			<div className="flex justify-center p-3">
				<Button className="h-9 w-full">Subscribe</Button>
			</div>
		</article>
	)
}
