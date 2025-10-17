"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
	label: string
	href: string
}

export function PageHeaderItem({ label, href }: Props) {
	const pathname = usePathname()

	const isActive = pathname === href

	return (
		<Link href={href}>
			<li
				className={clsx({
					"cursor-pointer py-1": true,
					"border-b border-[#00000060] font-semibold tracking-wider text-[#1B1B1B]": isActive,
					"text-[#777]": !isActive
				})}
			>
				{label}
			</li>
		</Link>
	)
}
