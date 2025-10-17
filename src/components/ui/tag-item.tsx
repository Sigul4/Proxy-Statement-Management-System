import { cn } from "@/lib/utils"

export function TagItem({
	className,
	title
}: {
	className?: string
	title: string
	rightIcon?: React.ReactNode
	leftIcon?: React.ReactNode
}) {
	return (
		<div
			className={cn(
				"flex w-full cursor-pointer flex-row items-center justify-between border-[1px] bg-[#4F6871] px-3 py-2 text-[14px]  text-white",
				className
			)}
		>
			<span>{title}</span>
		</div>
	)
}
