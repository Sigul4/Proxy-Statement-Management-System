import MoreOptionsButton from "@/app/(protected)/master-data/_components/more-options-button"
import { TagItem } from "@/components/ui/tag-item"
import * as Popover from "@radix-ui/react-popover"
import Link from "next/link"

export function BlogsTooltip() {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<MoreOptionsButton />
			</Popover.Trigger>
			<Popover.Anchor />
			<Popover.Portal>
				<Popover.Content>
					<Link href="/admin/blog/new" passHref>
						<div>
							<TagItem title="Add blog" />
						</div>
					</Link>
					<Popover.Close />
					<Popover.Arrow />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}
