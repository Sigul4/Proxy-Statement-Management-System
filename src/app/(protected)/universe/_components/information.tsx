"use client"

import { IconClose } from "@/components/icons/icon-close"
import { InfoAlert } from "./info-alert"

export function Information({
	description,
	isOpen,
	setIsOpen
}: {
	description: string
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}) {
	if (!isOpen) return null

	return (
		<section className="relative flex w-full flex-col gap-2 rounded-xl bg-[#4F6871] pb-10 pl-16 pr-3 pt-3 text-xs font-medium leading-5 tracking-wider text-white max-md:max-w-full max-md:pl-5">
			<header className="flex justify-end">
				<button onClick={() => setIsOpen(false)}>
					<IconClose width={12} height={12} />
				</button>
			</header>
			<InfoAlert />
			<div>{description}</div>
		</section>
	)
}
