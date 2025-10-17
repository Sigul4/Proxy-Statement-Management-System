export default function UniqueFeaturesItem({ title, description }: { title: string; description: string }) {
	return (
		<article className="flex min-h-[210px] flex-col gap-6 rounded-2xl border-2 border-[#ECF1F2] bg-white p-6 shadow-[10px_10px_16px_0px_rgba(226,239,245,0.1)]">
			<h3 className="text-balance font-bold leading-6 tracking-[0.8px] text-[#274B56]">{title}</h3>
			<p className="text-xs font-normal leading-5 tracking-[0.6px] text-[#274B56]">{description}</p>
		</article>
	)
}
