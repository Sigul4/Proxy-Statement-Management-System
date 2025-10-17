"use client"

import Link from "next/link"
import Button from "../../_components/button"
import Input from "../../_components/input"
import BackButton from "./back-button"

export default function ResetPasswordForm() {
	return (
		<>
			<form className="flex flex-col px-24">
				<div className="mt-16 flex items-center gap-6 text-micro text-[#999]">
					<BackButton />
					<h1 className="text-3xl font-normal tracking-[1.12px]">Reset password</h1>
				</div>
				<p className="mt-6 text-xs text-[#999]">
					Enter your email address and we will send you instructions to reset your password.
				</p>
				<div className="mt-14 flex w-full flex-col gap-6">
					<Input name="Email" type="email" />
					<Button asChild>
						<Link href="/universe/activity">Reset</Link>
					</Button>
				</div>
			</form>
		</>
	)
}
