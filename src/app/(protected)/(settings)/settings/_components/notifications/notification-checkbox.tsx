import { Checkbox } from "@/components/ui/checkbox"

export default function NotificationCheckbox({ id, label }: { id: string; label: string }) {
	return (
		<div className="items-top flex items-center space-x-2">
			<Checkbox id={id} />
			<div className="grid gap-1.5 leading-none">
				<label
					htmlFor={id}
					className="text-xs font-normal leading-none tracking-[0.4px] text-[#777] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{label}
				</label>
			</div>
		</div>
	)
}
