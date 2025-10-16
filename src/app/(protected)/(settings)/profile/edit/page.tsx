"use client"

import { getUser, updateUser, UserProfileData } from "@/app/api/auth/[...nextauth]/user/user.service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getLastAuthUserFromCookies } from "@/utils/getUserId"
import Link from "next/link"
import { useEffect, useState } from "react"
import LogoutButton from "../_components/log-out-button"

async function getPersonalDetails() {
	const userId = getLastAuthUserFromCookies()
	if (!userId) {
		throw new Error("No user id found in cookies.")
	}
	const personalDetails = await getUser(`user-${userId}`)
	if (!personalDetails) {
		throw new Error("No user details found")
	}
	return personalDetails
}

export default function EditPersonalDetails() {
	const [userData, setUserData] = useState<UserProfileData | null>(null)
	const [editedValues, setEditedValues] = useState<Partial<UserProfileData>>({
		firstName: "",
		lastName: "",
		phoneNumber: ""
	})

	useEffect(() => {
		async function fetchPersonalDetails() {
			try {
				const details = await getPersonalDetails()
				setUserData(details)
				setEditedValues({
					firstName: details.firstName || "",
					lastName: details.lastName || "",
					phoneNumber: details.phoneNumber || ""
				})
			} catch (error) {
				console.error("Error fetching personal details:", error)
			}
		}
		fetchPersonalDetails()
	}, [])

	const handleInputChange = (field: keyof UserProfileData) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedValues(prev => ({ ...prev, [field]: e.target.value }))
	}

	const handleSave = async () => {
		if (userData) {
			try {
				const userId = getLastAuthUserFromCookies()
				if (!userId) {
					throw new Error("No user id found in cookies.")
				}
				console.log("Updating user:", userId, editedValues)
				const updatedUser = await updateUser(`user-${userId}`, editedValues)
				setUserData(updatedUser)
			} catch (error) {
				console.error("Error updating user:", error)
			}
		}
	}

	return (
		<div className="flex flex-col">
			<h2 className="text-lg font-semibold">Personal details</h2>
			<form onSubmit={e => e.preventDefault()}>
				<div className="mt-6 grid grid-cols-2 gap-8">
					<div className="flex flex-col gap-2">
						<Label htmlFor="firstName" className="font-normal tracking-[0.4px] text-[#777]">
							First name <span className="text-[#4B7685]">*</span>
						</Label>
						<Input
							id="firstName"
							name="firstName"
							className="h-9 rounded-lg border border-[#F1F1F5] shadow-none"
							required
							value={editedValues.firstName}
							onChange={handleInputChange("firstName")}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="lastName" className="font-normal tracking-[0.4px] text-[#777]">
							Last name <span className="text-[#4B7685]">*</span>
						</Label>
						<Input
							id="lastName"
							name="lastName"
							className="h-9 rounded-lg border border-[#F1F1F5] shadow-none"
							required
							value={editedValues.lastName}
							onChange={handleInputChange("lastName")}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="phoneNumber" className="font-normal tracking-[0.4px] text-[#777]">
							Phone number <span className="text-[#4B7685]">*</span>
						</Label>
						<Input
							id="phoneNumber"
							name="phoneNumber"
							className="h-9 rounded-lg border border-[#F1F1F5] shadow-none"
							required
							value={editedValues.phoneNumber}
							onChange={handleInputChange("phoneNumber")}
						/>
					</div>
					<div className="mt-6 flex gap-5">
						<LogoutButton />
					</div>
				</div>
				<div className="mt-6 flex gap-4">
					<Button onClick={handleSave}>Save</Button>
					<Link href="/profile/preview" passHref>
						<Button variant="outline">Preview</Button>
					</Link>
				</div>
			</form>
		</div>
	)
}
