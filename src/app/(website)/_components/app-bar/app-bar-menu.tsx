import AppBarMenuItem from "./app-bar-menu-item"

const items = [
	{
		name: "Company",
		href: "/company"
	},
	{
		name: "Pricing",
		href: "/pricing"
	},
	{
		name: "Blog",
		href: "/blog"
	}
]

export default function AppBarMenu() {
	return (
		<ul className="hidden list-none gap-12 md:flex">
			{items.map(item => (
				<AppBarMenuItem key={item.name} {...item} />
			))}
		</ul>
	)
}
