import React, { useState } from "react"

interface TooltipProps {
	content: string
	children: React.ReactNode
	position?: "top" | "bottom" | "left" | "right"
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = "top" }) => {
	const [isVisible, setIsVisible] = useState(false)

	const positionClasses = {
		top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
		bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
		left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
		right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
	}

	return (
		<div className="relative inline-block">
			<div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
				{children}
			</div>
			{isVisible && (
				<div className={`absolute z-10 ${positionClasses[position]}`}>
					<div className="whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white">{content}</div>
				</div>
			)}
		</div>
	)
}
