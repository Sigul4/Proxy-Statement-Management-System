"use client"

import { handleCompleteProfile, UserProfileData } from "@/app/api/auth/[...nextauth]/user/user.service"
import { getCurrentUser } from "aws-amplify/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "../../_components/button"
import Input from "../../_components/input"

export function OnboardingForm() {
	const [error, setError] = useState<string | null>(null)
	const [currentUser, setCurrentUser] = useState<{ userId: string; signInDetails: any } | null>(null)
	const router = useRouter()

	useEffect(() => {
		const fetchCurrentUser = async () => {
			try {
				const user = await getCurrentUser()
				setCurrentUser({
					userId: user.userId,
					signInDetails: user.signInDetails
				})
			} catch (error) {
				console.error("Error fetching current user:", error)
				setError("Failed to fetch user information. Please try again.")
			}
		}

		fetchCurrentUser()
	}, [])

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setError(null)

		if (!currentUser) {
			setError("User information not available. Please try again.")
			return
		}

		const formData = new FormData(event.currentTarget)
		const userData: UserProfileData = {
			id: "user-" + currentUser.userId,
			firstName: formData.get("firstName") as string,
			lastName: formData.get("lastName") as string,
			company: formData.get("company") as string,
			role: formData.get("role") as string,
			phoneNumber: formData.get("phoneNumber") as string,
			email: currentUser.signInDetails?.loginId || "",
			confirmed_access: false
		}

		for (const [key, value] of Object.entries(userData)) {
			if (!value && key !== "confirmed_access") {
				setError(`Please fill out the ${key} field.`)
				return
			}
		}

		// Phone number validation
		const phoneRegex = /^\+?[1-9]\d{1,14}$/
		if (!phoneRegex.test(userData.phoneNumber)) {
			setError("Please enter a valid phone number.")
			return
		}

		try {
			await handleCompleteProfile(userData)
			router.push("/pending-review")
		} catch (e) {
			setError("An error occurred while completing your profile. Please try again.")
		}
	}

	return (
		<>
			<form className="flex flex-col px-9" onSubmit={handleSubmit}>
				<h1 className="text-3xl font-normal tracking-[1.12px]">Complete Your Profile</h1>
				<p className="my-5 text-base font-light text-slate-400">
					Please fill out your profile so we know better who you are and can quickly help if needed
				</p>
				<div className="my-10 flex w-full flex-col gap-6">
					<Input className="my-1" name="firstName" type="text" required />
					<Input className="mb-6" name="lastName" type="text" required />
					<Input className="my-1" name="company" type="text" required />
					<Input className="mb-7" name="role" type="text" required />
					<Input
						className="my-1"
						name="phoneNumber"
						type="tel"
						required
						pattern="\+?[1-9]\d{1,14}"
						title="Please enter a valid phone number"
					/>
					<Button type="submit">
						Complete Profile
					</Button>
				</div>
				{error && <p className="mt-4 text-red-500">{error}</p>}
			</form>
		</>
	)
}
