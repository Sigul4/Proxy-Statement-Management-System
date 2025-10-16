export default function AbnormalReturnByDemandTypeLegend() {
	return (
		<div className="flex items-center gap-4 whitespace-nowrap align-middle text-xs tracking-wide">
			<div className="flex items-center gap-1.5 whitespace-nowrap align-middle text-xs tracking-wide">
				<div className="h-3 w-3 shrink-0 rounded-full bg-slate-500" />
				<span className="my-auto text-[#999]">2-day return</span>
			</div>
			<div className="flex items-center gap-1.5 whitespace-nowrap align-middle text-xs tracking-wide">
				<div className="h-3 w-3 shrink-0 rounded-full bg-blue-300" />
				<span className="my-auto text-[#999]">10-day return</span>
			</div>
			<div className="flex items-center gap-1.5 whitespace-nowrap align-middle text-xs tracking-wide">
				<div className="h-3 w-3 shrink-0 rounded-full bg-slate-500" />
				<span className="text-[#999]">40-day return</span>
			</div>
		</div>
	)
}
