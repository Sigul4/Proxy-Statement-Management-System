import NextAuth, { NextAuthConfig } from "next-auth"
import Cognito from "next-auth/providers/cognito"

const authOptions: NextAuthConfig = {
	providers: [
		Cognito({
			clientId: process.env.AUTH_COGNITO_ID!,
			clientSecret: process.env.AUTH_COGNITO_SECRET!,
			issuer: process.env.AUTH_COGNITO_ISSUER!
		})
	],
	pages: {
		signIn: "/auth/login"
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
