import FreeTrialButton from "./free-trial-button"
import HamburgerButton from "./hamburger-button"
import LoginButton from "./login-button"

export default function AppBarToolbar() {
	return (
		<>
			<div className="hidden gap-4 md:flex">
				<LoginButton />
				<FreeTrialButton />
			</div>
			<div className="md:hidden">
				<HamburgerButton />
			</div>
		</>
	)
}
