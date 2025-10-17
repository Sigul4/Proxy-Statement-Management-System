import AppBar from "../app-bar/app-bar"
import HeroBg from "./hero-bg"
import IconMouse from "./icon-mouse"

export default function Hero() {
	return (
		<div
			className="relative min-h-[755px] w-full bg-[#F0F7FA] bg-[url('/assets/home/bg-hero.jpg')] bg-center bg-repeat bg-blend-overlay"
			style={{
				backgroundSize: "100%"
			}}
		>
			<HeroBg>
				<div className="container">
					<AppBar />
					<section className="flex flex-col py-[70px] md:py-28">
						<p className="mb-10 text-[28px] font-bold leading-9 tracking-[0.84px] text-[#274B56] md:text-5xl md:leading-[64px] md:tracking-[1.44px]">
							Next-level shareholder <br /> activism insights
						</p>
						<p className="mb-12 max-w-[925px] text-justify tracking-[0.8px] text-[#274B56] md:text-start">
							At DEF 14, our mission is to revolutionize the way you understand and engage with shareholder activism. We
							provide cutting-edge analytics and intelligence that transform data into actionable insights. Whether you
							are defending against activist campaigns or driving them, our platform is designed to give you a
							competitive edge with the most advanced tools and information in the industry.
						</p>
						<div>
							<button className="w-full rounded-lg bg-[#4E9BB4] px-10 py-4 tracking-[0.8px] text-white md:w-auto">
								Request a free trial
							</button>
						</div>
					</section>
					<div className="flex flex-1 justify-start pb-11 md:pb-0">
						<div className="mx-auto flex items-center gap-3 pb-4 md:m-0">
							<IconMouse />
							<span className="text-sm tracking-[0.7px] text-[#274B56]">Scroll down</span>
						</div>
					</div>
				</div>
			</HeroBg>
		</div>
	)
}
