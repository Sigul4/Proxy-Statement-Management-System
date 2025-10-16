import { Logo } from "@/app/(protected)/_components/app-bar/logo"
import Link from "next/link"

export default function AppBarLogo() {
	return (
		<Link href="/">
			<Logo />
		</Link>
	)
}
