import { PageHeader } from "../_components/page-header/page-header"

const headerItems = [
	{
		label: "Dashboard",
		href: "/admin/dashboard"
	},
	{
		label: "Users",
		href: "/admin/users"
	},

	{
		label: "Highlights",
		href: "/admin/hightlights"
	},
	{
		label: "Activist Situations",
		href: "/admin/situations"
	},
	{
		label: "Blog",
		href: "/admin/blog"
	}
]

export default function UniverseLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<PageHeader title="Admin" items={headerItems} hasFilters={false} />
			<div className="flex flex-col gap-4 md:gap-10">{children}</div>
		</>
	)
}
