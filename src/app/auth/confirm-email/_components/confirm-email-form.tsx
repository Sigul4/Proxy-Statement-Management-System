"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleConfirmSignUp } from "@/lib/cognitoActions"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function ConfirmEmailForm() {
	const [email, setEmail] = useState("")
	const [code, setCode] = useState("")
	const [error, setError] = useState("")
	const router = useRouter()

	// Check if email exists in session storage
	useEffect(() => {
		const storedEmail = sessionStorage.getItem("email")
		if (storedEmail) {
			setEmail(storedEmail)
		}
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append("email", email)
		formData.append("code", code)

		const response = await handleConfirmSignUp(formData)

		if (typeof response !== "string") {
			setError(response.error)
		} else {
			router.push(response)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{error && <p className="text-center text-red-400">{error}</p>}
			{!email && (
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
			)}
			<div className="space-y-2">
				<Label htmlFor="code">Confirmation Code</Label>
				<Input
					id="code"
					type="text"
					placeholder="Enter confirmation code"
					value={code}
					onChange={e => setCode(e.target.value)}
					required
				/>
			</div>
			<Button type="submit" className="w-full">
				Confirm Email
			</Button>
		</form>
	)
}
