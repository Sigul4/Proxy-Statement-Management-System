"use client"
import { getUser } from "@/app/api/auth/[...nextauth]/user/user.service"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { getLastAuthUserFromCookies } from "@/utils/getUserId"
import { fetchAuthSession } from "aws-amplify/auth"
import Link from "next/link"
import LogoutButton from "../_components/log-out-button"

async function getPersonalDetails() {
	console.log("fetchAuthSession: ", await fetchAuthSession())
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

export default async function PreviewPersonalDetails() {
	const personalDetails = await getPersonalDetails()

	return (
		<div className="flex flex-col">
			<h2 className="text-lg font-semibold">Personal details</h2>
			<div className="mt-6 grid grid-cols-2 gap-8">
				<div>
					<Label className="font-normal tracking-[0.4px] text-[#777]">First name</Label>
					<p>{personalDetails.firstName}</p>
				</div>
				<div>
					<Label className="font-normal tracking-[0.4px] text-[#777]">Last name</Label>
					<p>{personalDetails.lastName}</p>
				</div>
				<div>
					<Label className="font-normal tracking-[0.4px] text-[#777]">Phone number</Label>
					<p>{personalDetails.phoneNumber}</p>
				</div>
				<div>
					<Label className="font-normal tracking-[0.4px] text-[#777]">Email</Label>
					<p>{personalDetails.email}</p>
				</div>
			</div>
			<div className="mt-6 flex gap-5">
				<LogoutButton />
				<Link href="/profile/edit" passHref>
					<Button>Edit</Button>
				</Link>
			</div>
		</div>
	)
}
