"use client"

import { handleSignIn, handleSignOut } from "@/lib/cognitoActions"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Button from "../../_components/button"
import Input from "../../_components/input"

export function LoginForm() {
	const [error, setError] = useState("")
	const [userExistError, setUserExistError] = useState(false)
	const router = useRouter()

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const response = await handleSignIn(formData)

		if (typeof response !== "string") {
			setError(response.error)
			if (response.error === "There is already a signed in user.") setUserExistError(true)

		} else {
			router.push(response)
		}
	}

	const handleLogout = async () => {
		console.log("Logging out...")
		await handleSignOut()
		window.location.reload()
	}

	return (
		<>
			<form className="flex flex-col px-9" onSubmit={handleSubmit}>
				<h1 className="mt-16 text-3xl font-normal tracking-[1.12px]">Log In</h1>
				<div className="mt-14 flex w-full flex-col gap-6">
					<Input name="email" type="email" required />
					<div className="flex flex-col gap-2">
						<Input name="password" type="password" required />
						<Link
							href="/auth/reset-password"
							className="text-micro text-[#1B1B1B] hover:underline hover:underline-offset-2"
						>
							Forgot Password?
						</Link>
					</div>
					{error && <p className="text-red-500">{error}</p>}
					<Button asChild>
						<button type="submit" disabled={userExistError}>Log In</button>
					</Button>
					{userExistError &&
						<Button asChild>
							<button onClick={handleLogout} >Log out</button>
						</Button>
					}
				</div>
			</form>
		</>
	)
}
