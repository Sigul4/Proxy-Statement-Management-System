import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { FiltersArrowDown } from "./filters-arrow-down"

export function FiltersCollapsible({
	title,
	children,
	defaultOpen
}: {
	title: string
	children: React.ReactNode
	defaultOpen?: boolean
}) {
	return (
		<Collapsible defaultOpen={defaultOpen}>
			<CollapsibleTrigger asChild>
				<div className="flex w-full cursor-pointer items-center justify-between">
					<h4 className="text-xs font-semibold tracking-[0.48px] text-[#1B1B1B]">{title}</h4>
					<FiltersArrowDown />
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>{children}</CollapsibleContent>
		</Collapsible>
	)
}
