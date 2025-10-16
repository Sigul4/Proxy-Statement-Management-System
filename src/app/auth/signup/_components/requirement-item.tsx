export default function RequirementItem({ label }: { label: string }) {
	return (
		<li className="flex items-center gap-2 text-micro text-[#999]">
			<div className="h-1 w-1 rounded-full bg-[#F1F1F5]  tracking-[0.4px]"></div>
			<span>{label}</span>
		</li>
	)
}
