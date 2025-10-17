import { AppBarLogo } from "./app-bar-logo"
import { AppBarMenu } from "./app-bar-menu"
import { AppToolbar } from "./app-toolbar"

export function AppBar() {
	return (
		<header className="h-20 w-full bg-white shadow-md">
			<div className="mx-auto flex max-w-[1300px] justify-between px-9">
				<div className="flex items-center justify-between text-sm tracking-wide text-neutral-500 max-md:max-w-full max-md:flex-wrap">
					<AppBarLogo />
					<div className="ml-9 mr-5 h-6 w-px shrink-0 border border-solid border-gray-100 bg-gray-100" />
					<AppBarMenu />
				</div>
				<AppToolbar />
			</div>
		</header>
	)
}
