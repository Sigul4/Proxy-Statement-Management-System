"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import HighlightCard from "./highlight-card"

export default function HighlightsCarousel({
	items,
	setApi
}: {
	items: {
		title: string
		date: string
		src: string
	}[]
	setApi: (api: CarouselApi) => void
}) {
	return (
		<Carousel setApi={setApi}>
			<CarouselContent>
				{items.map((item, index) => (
					<CarouselItem key={index} className="basis-2/6">
						<HighlightCard {...item} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
