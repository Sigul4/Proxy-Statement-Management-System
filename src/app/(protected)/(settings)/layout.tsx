import { PageHeader } from "../_components/page-header/page-header"

const headerItems = [
	{
		label: "Profile",
		href: "/profile/preview"
	},
	{
		label: "Settings",
		href: "/settings"
	},
	{
		label: "Connections",
		href: "/connections"
	},
	{
		label: "Subscription",
		href: "/subscription"
	}
]

export default function SettingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<PageHeader title="Hello, Stephanie" items={headerItems} />
			<div className="flex flex-col gap-4 md:gap-10">{children}</div>
		</>
	)
}
