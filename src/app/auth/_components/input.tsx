import { Input as BaseInput } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Input({
	name,
	type,
	required = false,
	className,
	pattern,
	title
}: {
	name: string
	type: string
	required?: boolean
	className?: string
	pattern?: string
	title?: string
}) {
	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			<Label className="font-normal tracking-[0.4px] text-[#777]">
				{name} <span className="text-[#4B7685]">*</span>
			</Label>
			<BaseInput 
				name={name} 
				type={type} 
				className="h-9 rounded-lg border border-[#F1F1F5] shadow-none"
				required={required}
				pattern={pattern}
				title={title}
			></BaseInput>
		</div>
	)
}
