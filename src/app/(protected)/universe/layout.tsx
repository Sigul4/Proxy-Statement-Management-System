import { PageHeader } from "../_components/page-header/page-header"

const headerItems = [
	{
		label: "Activity",
		href: "/universe/activity"
	},
	{
		label: "Characteristics",
		href: "/universe/characteristics"
	},
	{
		label: "Return",
		href: "/universe/return"
	},
	{
		label: "Portfolio",
		href: "/universe/portfolio"
	},
	{
		label: "Outcome",
		href: "/universe/outcome"
	},
	// {
	// 	label: "Advisors",
	// 	href: "/universe/advisors"
	// }
]

export default function UniverseLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<PageHeader title="Universe" items={headerItems} hasFilters />
			<div className="flex flex-col gap-4 md:gap-10">{children}</div>
		</>
	)
}
