export default function SelectedFilterChip({
	label
}: Readonly<{
	label: string
}>) {
	return (
		<div className="flex items-center rounded-lg bg-[#F1F1F5] px-3 py-1.5 text-xs font-medium tracking-[0.4px] text-[#1B1B1B]">
			{label}
		</div>
	)
}
