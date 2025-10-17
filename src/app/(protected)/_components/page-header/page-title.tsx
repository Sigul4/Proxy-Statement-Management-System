export function PageTitle({ title }: { title?: string }) {
	return <h2 className="pr-7 text-[28px] tracking-wider text-[#1B1B1B]">{title || "PageTitle"}</h2>
}
