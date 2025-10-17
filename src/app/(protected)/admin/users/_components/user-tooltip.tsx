import MoreOptionsButton from "@/app/(protected)/master-data/_components/more-options-button"
import { TagItem } from "@/components/ui/tag-item"
import * as Popover from "@radix-ui/react-popover"

export function UsersTooltip() {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<MoreOptionsButton />
			</Popover.Trigger>
			<Popover.Anchor />
			<Popover.Portal>
				<Popover.Content className="">
					<TagItem title="Add user" />
					<Popover.Close />
					<Popover.Arrow />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}
