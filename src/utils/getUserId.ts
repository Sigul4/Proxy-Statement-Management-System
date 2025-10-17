export function getLastAuthUserFromCookies(): string | null {
	const cookies: string = document.cookie
	const cookieArray: string[] = cookies.split(";")

	for (let cookie of cookieArray) {
		cookie = cookie.trim()
		const [key, value]: [string, string] = cookie.split("=")

		if (key.includes("LastAuthUser")) {
			return decodeURIComponent(value)
		}
	}

	return null
}
