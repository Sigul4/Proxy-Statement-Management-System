"use client"

import { handleSignOut, handleSignUp } from "@/lib/cognitoActions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Button from "../../_components/button"
import Input from "../../_components/input"
import Requirements from "./requirements"

const requirements = [
	"8 characters minimum",
	"Contains at least 1 number",
	"Contains at least 1 special character",
	"Contains at least 1 uppercase letter",
	"Contains at least 1 lowercase letter"
]

const validatePassword = (password: string) => {
	const errors: string[] = []
	const passwordRules = {
		hasNumber: /[0-9]/.test(password),
		hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
		hasUpperCase: /[A-Z]/.test(password),
		hasLowerCase: /[a-z]/.test(password),
		isLongEnough: password.length >= 8
	}

	if (!passwordRules.isLongEnough) errors.push("Password must be at least 8 characters long")
	if (!passwordRules.hasNumber) errors.push("Password must contain at least 1 number")
	if (!passwordRules.hasSpecialChar) errors.push("Password must contain at least 1 special character")
	if (!passwordRules.hasUpperCase) errors.push("Password must contain at least 1 uppercase letter")
	if (!passwordRules.hasLowerCase) errors.push("Password must contain at least 1 lowercase letter")

	return errors
}

export function SignUpForm() {
	const [error, setError] = useState("")
	const [passwordErrors, setPasswordErrors] = useState<string[]>([])
	const [userExistError, setUserExistError] = useState(false)
	const router = useRouter()

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const password = String(formData.get("password"))

		const errors = validatePassword(password)
		if (errors.length > 0) {
			setPasswordErrors(errors)
			return
		}

		setPasswordErrors([])
		const response = await handleSignUp(formData)

		if (typeof response !== "string") {
			setError(response.error)
			if (response.error === "There is already a signed in user.") setUserExistError(true)
		} else {
			router.push(response)
		}
	}

	const handleLogout = async () => {
		console.log("Logging out...")
		const response = await handleSignOut()
		if (typeof response !== "string") return

		router.push(response)
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col px-24">
				<h1 className="mt-16 text-3xl font-normal tracking-[1.12px]">Sign Up</h1>
				<div className="mt-14 flex w-full flex-col gap-6">
					<Input name="email" type="email" required />
					<div className="flex flex-col gap-2">
						<Input name="password" type="password" required />
						{passwordErrors.length > 0 && (
							<div className="text-red-500">
								{passwordErrors.map((error, index) => (
									<p key={index}>{error}</p>
								))}
							</div>
						)}
					</div>
					<Requirements data={requirements} />
					{error && <p className="text-red-500">{error}</p>}
					<Button asChild>
						<button type="submit" disabled={userExistError}>
							Create account
						</button>
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
