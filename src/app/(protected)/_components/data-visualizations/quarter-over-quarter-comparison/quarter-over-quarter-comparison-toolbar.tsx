import { IconShare } from "@/components/icons/icon-share"

export default function QuarterOverQuarterComparisonToolbar() {
	return (
		<div className="flex flex-grow gap-5">
			<button className="flex items-center rounded-md bg-[#F1F1F5] p-2 text-neutral-500 hover:bg-neutral-200">
				<IconShare />
			</button>
		</div>
	)
}
