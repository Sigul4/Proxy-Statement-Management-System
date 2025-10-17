import AppBar from "../_components/app-bar/app-bar"
import Footer from "../_components/footer/footer"
import BgPricing from "./_components/bg-pricing"
import PricingCard from "./_components/pricing-card"
import { policies, pricings } from "./_constants/pricing"

export default function PricingPage() {
	return (
		<div className="flex h-dvh flex-col">
			<div className="container py-2.5">
				<AppBar />
			</div>
			<div className="relative flex flex-1 justify-center">
				<BgPricing />
				<div className="container flex flex-col py-20 text-center text-white">
					<h2 className="mb-6 text-center text-[32px] font-bold">Pricing Plans</h2>
					<div className="w-fit self-center rounded-lg bg-white px-4 py-1.5 text-[#274B56]">Start 7-day free trial</div>
					<section className="mt-20 grid grid-cols-1 justify-center gap-10 text-black md:grid-cols-2 lg:grid-cols-3">
						{pricings.map((pricing, index) => (
							<PricingCard key={index} {...pricing} />
						))}
					</section>
				</div>
			</div>
			<div className="container flex  w-full  flex-col items-center justify-center gap-2 px-[122px] pb-10 text-xs text-[#777] ">
				{policies.map((item, index) => {
					return (
						<div key={`${item.title}-${index}`} className="flex w-full flex-col">
							<span className="text-sm">{item.title}</span>
							<div>
								{item.points.map((pol, index) => (
									<div key={index} className="ml-2 flex  flex-col text-xs	">
										<span>{pol.subTitle}</span>

										<ul className="list-disc pl-6">
											{pol.details.map((det, indexD) => (
												<li key={indexD}>{det}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					)
				})}
			</div>
			<Footer />
		</div>
	)
}
