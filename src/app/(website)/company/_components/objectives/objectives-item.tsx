import { cn } from "@/lib/utils"

export default function ObjectivesItem({
	title,
	description,
	reversed
}: {
	title: string
	description: string
	reversed: boolean
}) {
	return (
		<article
			className={cn("flex max-w-[932px] flex-col gap-10", {
				"md:self-end": reversed
			})}
		>
			<header
				className={cn("flex items-center gap-9", {
					"md:flex-row-reverse md:self-end": reversed
				})}
			>
				<div className="h-9 w-1 bg-[#4E9BB4]"></div>
				<h3
					className={cn("text-[32px] font-bold leading-[48px] tracking-[1.6px]", {
						"md:self-end": reversed
					})}
				>
					{title}
				</h3>
			</header>
			<p
				className={cn("font-normal leading-7 tracking-[0.8px]", {
					"md:text-end": reversed
				})}
			>
				{description}
			</p>
		</article>
	)
}
