"use server"

import { AuthError } from "next-auth"
import { revalidatePath } from "next/cache"
import { signIn, signOut } from "./auth"

export async function login(prevState: string | undefined, formData: FormData) {
	try {
		const { email, password } = Object.fromEntries(formData)
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false
		})
		return "Success"
	} catch (error) {
		console.log(error)
		if (error instanceof Error) {
			const { type, cause } = error as AuthError
			switch (type) {
				case "CredentialsSignin":
					return "CredentialsSignIn"
				case "CallbackRouteError":
					return cause?.err?.toString()
				default:
					return "Something went wrong."
			}
		}
		return "CredentialsSignIn"
	}
}

export async function logout() {
	await signOut()
	revalidatePath("/")
}
