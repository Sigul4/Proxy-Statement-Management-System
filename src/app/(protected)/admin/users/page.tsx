import { SectionCard } from "@/components/section-card"

import { UsersTooltip } from "./_components/user-tooltip"
import { UserList } from "./_components/users-list"

export default function Users() {
	return (
		<div className="flex flex-col gap-8">
			<SectionCard title="Users list" toolbar={<UsersTooltip />}>
				<UserList />
			</SectionCard>
		</div>
	)
}
