"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AppBarMenuItem({ name, href }: { name: string; href: string }) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<li key={name} className="relative text-sm tracking-[0.7px] text-[#274B56]">
			<Link href={href}>{name}</Link>
			{isActive && <div className="absolute left-1/2 mx-auto mt-[6px] h-[2px] w-5 -translate-x-1/2 bg-[#4E9BB4]" />}
		</li>
	)
}
