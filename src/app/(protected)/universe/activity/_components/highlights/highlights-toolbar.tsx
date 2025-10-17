import { CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import { cn } from "../../../../../../lib/utils"

export default function HighlightsToolbar({
	api,
	count,
	current
}: {
	api: CarouselApi
	count: number
	current: number
}) {
	function handlePrevious() {
		if (!api) return
		api.scrollPrev()
	}

	function handleNext() {
		if (!api) return
		api.scrollNext()
	}

	if (!api) return null

	return (
		<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
			<div className="text-lg font-semibold tracking-wider text-zinc-900">Highlights</div>
			<div className="flex gap-4 self-start">
				<Image
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d30227a81cf85934aebacfabef51ce6a2ef2691fdbedbb4dc45621be5bda0e3?apiKey=463f2f09f74942b0bf01135f44a6248b&"
					className={cn("aspect-square w-4 shrink-0 rotate-180", current === 1 ? "opacity-50" : "cursor-pointer")}
					unoptimized
					alt="Vector"
					width={16}
					height={16}
					onClick={handlePrevious}
				/>
				<Image
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d30227a81cf85934aebacfabef51ce6a2ef2691fdbedbb4dc45621be5bda0e3?apiKey=463f2f09f74942b0bf01135f44a6248b&"
					className={cn("aspect-square w-4 shrink-0", current === count ? "opacity-50" : "cursor-pointer")}
					unoptimized
					alt="Vector"
					width={16}
					height={16}
					onClick={handleNext}
				/>
			</div>
		</header>
	)
}
