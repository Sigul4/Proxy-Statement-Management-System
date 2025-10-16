import { cn } from "@/lib/utils"
import React from "react"

interface BadgeProps {
	children: React.ReactNode
	variant?: "default" | "secondary" | "outline"
	className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className }) => {
	const baseStyles =
		"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

	const variantStyles = {
		default: "bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
		outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
	}

	return <span className={cn(baseStyles, variantStyles[variant], className)}>{children}</span>
}
