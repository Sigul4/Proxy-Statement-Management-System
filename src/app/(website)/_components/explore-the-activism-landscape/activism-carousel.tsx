"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import Image from "next/image"

const ITEMS = [
	{
		image: "/characteristics/characteristics-3.png",
		width: 608,
		height: 412,
		alt: "Example characteristics page for logged user website"
	},
	{
		image: "/characteristics/characteristics-4.png",
		width: 608,
		height: 412,
		alt: "Example outcome page for logged user website"
	},
	{
		image: "/characteristics/characteristics-5.png",
		width: 608,
		height: 412,
		alt: "Example return page for logged user website"
	}
]

export default function ActivismCarousel() {
	return (
		<div className="mt-10 w-full">
			<Carousel
				opts={{
					loop: true
				}}
				plugins={[
					Autoplay(),
					WheelGesturesPlugin({
						forceWheelAxis: "y"
					})
				]}
			>
				<CarouselContent>
					{ITEMS.map((item, index) => (
						<CarouselItem key={index} className="flex basis-2/4 justify-center">
							<Image src={item.image} width={item.width} height={item.height} alt={item.alt} unoptimized priority />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}
