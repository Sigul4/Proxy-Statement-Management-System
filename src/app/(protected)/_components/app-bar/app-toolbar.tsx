import { Search } from "./search"
import { UserProfile } from "./user-profile"
import Wishlisted from "./wishlisted"

export function AppToolbar() {
	return (
		<div className="flex items-center justify-between gap-8">
			<Search />
			<Wishlisted />
			<UserProfile />
		</div>
	)
}
