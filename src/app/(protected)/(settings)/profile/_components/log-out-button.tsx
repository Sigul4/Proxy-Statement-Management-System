"use client"

import { Button } from "@/components/ui/button"
import { handleSignOut } from "@/lib/cognitoActions"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
	const router = useRouter()

	const handleLogout = async () => {
		console.log("Logging out...")
		const response = await handleSignOut()
		if (typeof response !== "string") return

		router.push(response)
	}

	return (
		<Button
			variant="link"
			className={cn("p-0 text-sm font-normal tracking-[0.48px] text-[#1B1B1B] underline underline-offset-8")}
			onClick={handleLogout}
		>
			Log out
		</Button>
	)
}
