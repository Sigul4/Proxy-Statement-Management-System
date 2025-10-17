import FiltersSideMenu from "../../universe/_components/filters/filters-side-menu"
import { PageHeaderItem } from "./page-header-item"
import { PageTitle } from "./page-title"
import SelectedFilters from "./selected-filters"

export function PageHeader({
	title,
	items,
	hasFilters
}: {
	title: string
	items?: { label: string; href: string }[]
	hasFilters?: boolean
}) {
	return (
		<div className="flex w-full justify-between gap-5 whitespace-nowrap pb-10 text-sm tracking-wide text-neutral-500 max-md:max-w-full max-md:flex-wrap">
			<div className="my-auto flex items-center max-md:flex-wrap">
				<PageTitle title={title} />
				<div className="w-full flex-grow items-center overflow-x-auto max-md:hidden">
					{items && items?.length > 0 && (
						<ul className="flex list-none items-center gap-7">
							{items.map((item, index) => (
								<PageHeaderItem key={index} label={item.label} href={item.href} />
							))}
						</ul>
					)}
				</div>
			</div>
			<div className="hidden w-full items-center gap-5 overflow-x-auto rounded-lg border bg-white p-2 max-md:flex">
				{items && items?.length > 0 && (
					<ul className="flex list-none items-center gap-5">
						{items.map((item, index) => (
							<PageHeaderItem key={index} label={item.label} href={item.href} />
						))}
					</ul>
				)}
			</div>
			<div className="flex gap-4">
				{hasFilters && <SelectedFilters />}
				{hasFilters && <FiltersSideMenu />}
			</div>
		</div>
	)
}
