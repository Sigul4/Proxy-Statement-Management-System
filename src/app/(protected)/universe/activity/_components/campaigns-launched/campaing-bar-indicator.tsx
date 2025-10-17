export function CampaingBarIndicator({ value, maxValue }: { value: number; maxValue: number }) {
	return (
		<div className="h-2 w-24 rounded-full bg-neutral-200">
			<div
				className="h-full rounded-full bg-gradient-to-l from-[#89c5d4] to-[#4b7685]"
				style={{ width: `${(value / maxValue) * 100}%` }}
			/>
		</div>
	)
}
