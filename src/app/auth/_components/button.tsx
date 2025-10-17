import { Button as BaseButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Button({
	children,
	variant = "default",
	asChild,
	className,
	onClick,
	type
}: {
	children: React.ReactNode
	variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
	asChild?: boolean
	className?: string
	onClick?: () => void
	type?: "button" | "submit" | "reset"
}) {
	return (
		<BaseButton
			variant={variant}
			className={(cn("h-9 rounded-lg bg-[#3A5A66] text-white"), className)}
			asChild={asChild}
			onClick={onClick}
			type={type}
		>
			{children}
		</BaseButton>
	)
}
