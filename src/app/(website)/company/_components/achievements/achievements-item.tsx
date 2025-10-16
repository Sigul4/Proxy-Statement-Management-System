import { cn } from "@/lib/utils"
import Image from "next/image"

export default function AchievementsItem({
	imageSrc,
	name,
	description,
	reversed
}: {
	imageSrc: string
	name: string
	description: string
	reversed?: boolean
}) {
	return (
		<article
			className={cn("flex flex-col justify-start gap-12 md:flex-row", {
				"md:flex-row-reverse": reversed
			})}
		>
			<Image src={imageSrc} width={280} height={280} className="aspect-square h-72 w-72" alt="Achievement" />
			<div className="flex flex-col justify-start gap-12">
				<h2
					className={cn("mt-4 text-[32px] font-bold leading-[48px] text-[#274B56]", {
						"text-start": !reversed,
						"md:text-end": reversed
					})}
				>
					{name}
				</h2>
				<p
					className={cn("mt-2 text-start leading-7 tracking-[0.8px] text-[#274B56]", {
						"text-start": !reversed,
						"md:text-end": reversed
					})}
				>
					{description}
				</p>
			</div>
		</article>
	)
}
