import { getUser } from "@/app/api/auth/[...nextauth]/user/user.service"
import { authenticatedUser } from "@/utils/amplify-server-utils"
import { getLastAuthUserFromCookies } from "@/utils/getUserId"
import { NextServer } from "@aws-amplify/adapter-nextjs"
import { MenuLink } from "./menu-link"

export async function AppBarMenu(context: NextServer.Context) {
	const session = authenticatedUser(context).then(user => {
		console.log("auth session", session)
		user
	})
	authenticatedUser
	async function getPersonalDetails() {
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

	const menuItems = [
		{
			name: "Universe",
			href: "/universe"
		},
		{
			name: "Master data",
			href: "/master-data"
		},
		{
			name: "Vulnerability",
			href: "/vulnerability"
		},
		{
			name: "Admin",
			href: "/admin/dashboard"
		}
	]

	return (
		<div className="flex gap-2">
			{menuItems.map(item => (
				<MenuLink key={item.href} {...item} />
			))}
		</div>
	)
}
