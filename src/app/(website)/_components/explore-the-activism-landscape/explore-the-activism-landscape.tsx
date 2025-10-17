import ActivismCarousel from "./activism-carousel"

export default function ExploreTheActivismLandscape() {
	return (
		<section className="relative w-full py-10 text-center text-white md:py-24">
			<div className="absolute inset-0 -z-10 h-[542px] bg-[#274B56] bg-[url('/assets/home/explore-the-activism-landscape.png')] bg-cover bg-blend-screen" />
			<div className="container px-8 md:px-0">
				<h2 className="mx-auto mb-6 w-auto px-0 text-[32px] font-bold leading-[48px] tracking-[1.6px] md:mb-14 md:max-w-4xl md:px-24">
					Explore the Activism Landscape
				</h2>
				<h3 className="mx-auto max-w-4xl text-sm font-normal leading-[21px] tracking-[0.7px] md:px-24 md:leading-normal md:tracking-[0.8px]">
					Experience an enjoyable journey through the activism landscape with access to a highly accurate and reliable
					dataset.
				</h3>
				<ActivismCarousel />
			</div>
		</section>
	)
}
