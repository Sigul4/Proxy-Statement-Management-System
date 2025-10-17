import { AppBarLogo } from "@/app/(protected)/_components/app-bar/app-bar-logo"
import AppBarMenu from "./app-bar-menu"
import AppBarToolbar from "./app-bar-toolbar"

export default function AppBar() {
	return (
		<header className="flex w-full items-center justify-between gap-28 py-6">
			<div className="flex items-center gap-28">
				<AppBarLogo />
				<AppBarMenu />
			</div>
			<AppBarToolbar />
		</header>
	)
}
