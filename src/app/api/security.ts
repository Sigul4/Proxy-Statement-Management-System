import { authenticatedUser } from "@/utils/amplify-server-utils"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { getUser } from "./auth/[...nextauth]/user/user.service"

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
	if (request.method !== "GET") {
		return response.status(405).json({ message: "Method Not Allowed" })
	}

	const user = await authenticatedUser({ request, response })
	const session = await getSession()

	if (!session) {
		return response.status(401).json({ message: "Unauthorized" })
	}

	try {
		const params = {
			UserPoolId: process.env.COGNITO_USER_POOL_ID,
			Username: session.user.email
		}

		const userData = user ? await getUser(`user-${user.username}`) : null

		if (!userData) {
			return response.status(404).json({ message: "User not found" })
		}

		// const twoFAEnabled = Object.values(userData).find(attr => attr.Name === "custom:twoFAEnabled")?.Value === "true"
		// const lastLogin = userData.UserLastModifiedDate
		// const activeSessions = await getActiveSessions(params.Username)

		response.status(200).json({
			twoFAEnabled: false,
			lastLogin: false,
			activeSessions: false
		})
	} catch (error) {
		console.error("Error fetching security information:", error)
		response.status(500).json({ message: "Internal Server Error" })
	}
}

// async function getActiveSessions(username: string): Promise<number> {
// 	const params = {
// 		UserPoolId: process.env.COGNITO_USER_POOL_ID,
// 		Username: username
// 	}

// 	const devices = await cognito.listDevices(params).promise()
// 	return devices.Devices?.length || 0
// }
