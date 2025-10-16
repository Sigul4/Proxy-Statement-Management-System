import Link from "next/link"
import { Logo } from "./logo"

export function AppBarLogo() {
	return (
		<Link href="/">
			<Logo />
		</Link>
	)
}
