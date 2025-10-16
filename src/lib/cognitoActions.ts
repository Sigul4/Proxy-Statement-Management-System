import { getErrorMessage } from "@/utils/get-error-message"
import {
	autoSignIn,
	confirmResetPassword,
	confirmSignUp,
	confirmUserAttribute,
	resendSignUpCode,
	resetPassword,
	signIn,
	signOut,
	signUp,
	updatePassword,
	updateUserAttribute,
	type UpdateUserAttributeOutput
} from "aws-amplify/auth"

export async function handleSignUp(formData: FormData) {
	try {
		const { isSignUpComplete, userId, nextStep } = await signUp({
			username: String(formData.get("email")),
			password: String(formData.get("password")),
			options: {
				userAttributes: {
					email: String(formData.get("email")),
					name: String(formData.get("name"))
				},
				autoSignIn: true
			}
		})

		sessionStorage.setItem("email", String(formData.get("email")))
		return "/auth/confirm-email"
	} catch (error) {
		return { error: getErrorMessage(error) }
	}
}

export async function handleSendEmailVerificationCode(
	prevState: { message: string; errorMessage: string },
	formData: FormData
) {
	let currentState
	try {
		await resendSignUpCode({
			username: String(formData.get("email"))
		})
		currentState = {
			...prevState,
			message: "Code sent successfully"
		}
	} catch (error) {
		currentState = {
			...prevState,
			errorMessage: getErrorMessage(error)
		}
	}

	return currentState
}

export async function handleConfirmSignUp(formData: FormData) {
	try {
		const { isSignUpComplete, nextStep } = await confirmSignUp({
			username: String(formData.get("email")),
			confirmationCode: String(formData.get("code"))
		})
		await autoSignIn()
		// return "/universe/activity"
		return "/auth/onboarding"
	} catch (error) {
		return { error: getErrorMessage(error) }
	}
}

export async function handleSignIn(formData: FormData) {
	let redirectLink = "/universe/activity"
	try {
		const { isSignedIn, nextStep } = await signIn({
			username: String(formData.get("email")),
			password: String(formData.get("password"))
		})
		if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
			await resendSignUpCode({
				username: String(formData.get("email"))
			})
			sessionStorage.setItem("email", String(formData.get("email")))
			redirectLink = "/auth/confirm-email"
		}
		return redirectLink
	} catch (error: unknown) {
		if (typeof error === "object" && error !== null && "message" in error) {
			if (error.message === "User is not confirmed.") {
				return "/auth/confirm-email"
			}
		}
		return { error: getErrorMessage(error) }
	}
}

export async function handleSignOut() {
	try {
		await signOut()
		return "/auth/login"
	} catch (error) {
		console.log(getErrorMessage(error))
		return { error: getErrorMessage(error) }
	}
}

export async function handleUpdateUserAttribute(formData: FormData) {
	let attributeKey = "name"
	let attributeValue
	let currentAttributeValue

	if (formData.get("email")) {
		attributeKey = "email"
		attributeValue = formData.get("email")
		currentAttributeValue = formData.get("current_email")
	} else {
		attributeValue = formData.get("name")
		currentAttributeValue = formData.get("current_name")
	}

	if (attributeValue === currentAttributeValue) {
		return ""
	}

	try {
		const output = await updateUserAttribute({
			userAttribute: {
				attributeKey: String(attributeKey),
				value: String(attributeValue)
			}
		})
		return handleUpdateUserAttributeNextSteps(output)
	} catch (error) {
		console.log(error)
		return { error: getErrorMessage(error) }
	}
}

function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributeOutput) {
	const { nextStep } = output

	switch (nextStep.updateAttributeStep) {
		case "CONFIRM_ATTRIBUTE_WITH_CODE":
			const codeDeliveryDetails = nextStep.codeDeliveryDetails
			return `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
		case "DONE":
			return "success"
	}
}

export async function handleUpdatePassword(formData: FormData) {
	const currentPassword = formData.get("current_password")
	const newPassword = formData.get("new_password")

	if (currentPassword === newPassword) {
		return
	}

	try {
		await updatePassword({
			oldPassword: String(currentPassword),
			newPassword: String(newPassword)
		})
		return "success"
	} catch (error) {
		console.log(error)
		return { error: getErrorMessage(error) }
	}
}

export async function handleConfirmUserAttribute(formData: FormData) {
	const code = formData.get("code")

	if (!code) {
		return
	}

	try {
		await confirmUserAttribute({
			userAttributeKey: "email",
			confirmationCode: String(code)
		})
		return "success"
	} catch (error) {
		console.log(error)
		return { error: getErrorMessage(error) }
	}
}

export async function handleResetPassword(formData: FormData) {
	try {
		await resetPassword({ username: String(formData.get("email")) })
		return "/auth/reset-password/confirm"
	} catch (error) {
		return { error: getErrorMessage(error) }
	}
}

export async function handleConfirmResetPassword(formData: FormData) {
	try {
		await confirmResetPassword({
			username: String(formData.get("email")),
			confirmationCode: String(formData.get("code")),
			newPassword: String(formData.get("password"))
		})
		return "/auth/login"
	} catch (error) {
		return { error: getErrorMessage(error) }
	}
}
