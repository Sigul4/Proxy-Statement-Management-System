"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export default function SecuritySection() {
	const [twoFAEnabled, setTwoFAEnabled] = useState(false)
	const [lastLogin, setLastLogin] = useState("")
	const [activeSessions, setActiveSessions] = useState(0)

	useEffect(() => {
		const fetchSecurityData = async () => {
			try {
				const response = await fetch("/api/security")
				const data = await response.json()
				setTwoFAEnabled(data.twoFAEnabled)
				setLastLogin(data.lastLogin)
				setActiveSessions(data.activeSessions)
			} catch (error) {
				console.error("Error fetching security data:", error)
			}
		}

		fetchSecurityData()
	}, [])

	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-lg font-semibold">Security</h2>
			<div className="flex w-full flex-col gap-2">
				<Button
					variant="outline"
					className="w-56 border-[#3A5A66] text-xs font-normal tracking-[0.48px] text-[#1B1B1B]"
				>
					Change password
				</Button>
				<div className="mt-8 flex w-full items-center gap-2">
					<div className="flex w-full items-center justify-between">
						<div className="flex items-center space-x-2">
							<Switch id="2fa" checked={twoFAEnabled} onCheckedChange={setTwoFAEnabled} />
							<Label htmlFor="2fa" className="text-micro font-normal tracking-[0.4px] text-[#1B1B1B]">
								2FA
							</Label>
						</div>
						<p className="text-xs tracking-[0.4px] text-[#1B1B1B]">{twoFAEnabled ? "Enabled" : "Disabled"}</p>
					</div>
				</div>
				<Separator className="my-2" />
				<div className="flex flex-col gap-5">
					<div className="flex w-full items-center justify-between">
						<p className="text-xs tracking-[0.4px] text-[#777]">Last login</p>
						<p className="text-xs">{lastLogin}</p>
					</div>
					<div className="flex w-full items-center justify-between gap-4">
						<p className="text-xs tracking-[0.4px] text-[#777]">Active sessions</p>
						<p className="text-xs">
							{activeSessions} <span className="ml-2 underline underline-offset-8">Close</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
