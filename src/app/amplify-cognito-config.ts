import { Amplify, type ResourcesConfig } from "aws-amplify"

export const authConfig: ResourcesConfig["Auth"] = {
	Cognito: {
		userPoolId: String(process.env.NEXT_PUBLIC_USER_POOL_ID),
		userPoolClientId: String(process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID),
		loginWith: {
			oauth: {
				domain: "https://networkBlog.auth.eu-north-1.amazoncognito.com",
				scopes: ["aws.cognito.signin.user.admin", "openid", "profile", "email"],
				redirectSignIn: ["http://localhost:3000/"],
				redirectSignOut: ["http://localhost:3000/"],
				responseType: "code"
			},
			username: true,
			email: false,
			phone: false
		}
	}
}

console.log("authConfig", authConfig)

Amplify.configure(
	{
		Auth: authConfig
	},
	{ ssr: true }
)

export default function ConfigureAmplifyClientSide() {
	return null
}
