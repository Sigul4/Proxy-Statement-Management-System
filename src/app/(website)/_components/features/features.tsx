import Image from "next/image"
import BgStars from "./bg-stars"

export default function Features() {
	return (
		<section className="container relative flex flex-col pb-40 pt-32">
			<div className="flex flex-col gap-32">
				<article className="relative flex h-80 flex-col items-center justify-between md:flex-row">
					<div className="absolute -z-10">
						<BgStars />
					</div>
					<div className="flex flex-col">
						<h2 className="mb-14 max-w-[440px] text-balance text-[32px] font-bold leading-[48px] tracking-[1.6px] text-[#274B56]">
							Seamless Contextual Navigation
						</h2>
						<p className="max-w-[492px] font-normal leading-[170%] tracking-[0.8px] text-[#274B56]">
							Switch effortlessly between contextual insights, detailed analysis, and profile deep dives with a single
							click.
						</p>
					</div>
					<div className="mt-20 flex flex-col md:mt-0">
						<Image
							src="/assets/home/landing-2.png"
							width={608}
							height={412}
							alt="Example master data details for logged user website"
							unoptimized
							priority={false}
						/>
					</div>
				</article>
				<article className="flex h-80 items-center justify-between gap-x-24">
					<div>
						<Image
							src="/assets/home/landing-3.png"
							width={608}
							height={412}
							alt="Example master data activists list for logged user website"
							unoptimized
							priority={false}
						/>
					</div>
					<div className="flex flex-col">
						<h2 className="mb-14 max-w-[492px] text-balance text-[32px] font-bold leading-[48px] tracking-[1.6px] text-[#274B56]">
							Transparent and Comprehensive Assessments
						</h2>
						<p className="max-w-[492px] font-normal leading-[170%] tracking-[0.8px] text-[#274B56]">
							Switch effortlessly between contextual insights, detailed analysis, and profile deep dives with a single
							click.
						</p>
					</div>
				</article>
			</div>
			<div
				className="absolute inset-44 -left-96 -z-10 h-[490px] w-[3650px] -rotate-12 blur-0"
				style={{
					background: "linear-gradient(103deg, rgba(228, 240, 246, 0.40) 13.4%, rgba(227, 240, 245, 0.00) 87.67%)"
				}}
			></div>
		</section>
	)
}
