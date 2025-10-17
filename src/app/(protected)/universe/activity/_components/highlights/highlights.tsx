"use client"

import { CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import HighlightsCarousel from "./highlights-carousel"
import HighlightsToolbar from "./highlights-toolbar"

const ITEMS = [
	{
		title: "CalPERS to vote against Exxon Board members",
		date: "Today",
		src: "/data/highlights/1.png"
	},
	{
		title: "Cevian builds stake at Baloise",
		date: "2 Days ago",
		src: "/data/highlights/2.png"
	},
	{
		title: "Musk pay challenged by activist",
		date: "4 Days ago",
		src: "/data/highlights/3.png"
	},
	{
		title: "CalPERS to vote against Exxon Board members2",
		date: "Today",
		src: "/data/highlights/1.png"
	},
	{
		title: "Cevian builds stake at Baloise2",
		date: "2 Days ago",
		src: "/data/highlights/2.png"
	},
	{
		title: "Musk pay challenged by activist2",
		date: "4 Days ago",
		src: "/data/highlights/3.png"
	}
]

export default function Highlights() {
	const [api, setApi] = useState<CarouselApi>()
	const [count, setCount] = useState(0)
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		if (!api) return

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<section className="flex w-full grow flex-col gap-5 rounded-xl border border-solid border-gray-100 bg-white px-6 py-6 shadow-sm max-md:max-w-full max-md:px-5">
			<HighlightsToolbar api={api} count={count} current={current} />
			<HighlightsCarousel items={ITEMS} setApi={setApi} />
		</section>
	)
}
