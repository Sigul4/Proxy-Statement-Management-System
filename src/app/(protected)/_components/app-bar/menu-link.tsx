"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
	name: string
	href: string
}

export function MenuLink({ name, href }: Props) {
	const pathname = usePathname()

	const isActive = pathname.includes(href)

	return (
		<div className="relative flex h-20 items-center px-1 md:px-3">
			<Link
				href={href}
				className={clsx("text-xs font-normal md:text-sm", {
					"tracking-widest-2 font-semibold text-[#1B1B1B]": isActive,
					"tracking-wider text-[#777]": !isActive
				})}
			>
				{name}
			</Link>
			{isActive && (
				<div className="absolute bottom-0 left-0 mt-8 h-[5px] w-full shrink-0 bg-gradient-to-r from-[#89c5d4] to-[#4b7685]" />
			)}
		</div>
	)
}
