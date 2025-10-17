"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProfileLinkButton({ onClick, label }: { onClick?: () => void; label: string }) {
	return (
		<Button
			variant="link"
			className={cn("p-0 text-sm font-normal tracking-[0.48px] text-[#1B1B1B] underline underline-offset-8")}
			onClick={() => onClick && onClick()}
		>
			{label}
		</Button>
	)
}
