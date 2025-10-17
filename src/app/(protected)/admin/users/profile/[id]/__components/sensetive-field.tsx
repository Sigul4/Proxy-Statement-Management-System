import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { CheckIcon, CopyIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { useState } from "react"

const SensitiveField = ({ label, value }: { label: string; value: string }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [isCopied, setIsCopied] = useState(false)

	const toggleVisibility = () => setIsVisible(!isVisible)

	const copyToClipboard = () => {
		navigator.clipboard.writeText(value)
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 2000)
	}

	const MASKED_FIELD = "••••••••"

	return (
		<div className="mb-4 rounded-lg bg-gray-50 p-3 transition-all duration-200 hover:bg-gray-100">
			<div className="flex flex-wrap items-center justify-between">
				<span className="truncate font-medium text-gray-700">{label}</span>
				<div className="flex items-center space-x-2">
					<Tooltip content={isVisible ? "Hide" : "Show"}>
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleVisibility}
							className="p-0 text-gray-500 hover:text-gray-700 focus:outline-none"
						>
							{isVisible ? <EyeOpenIcon className="h-4 w-4" /> : <EyeClosedIcon className="h-4 w-4" />}
						</Button>
					</Tooltip>
					<Tooltip content={isCopied ? "Copied!" : "Copy"}>
						<Button
							variant="ghost"
							size="sm"
							onClick={copyToClipboard}
							className={`text-gray-500 hover:text-gray-700 focus:outline-none ${isCopied ? "text-green-500" : ""}`}
						>
							{isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
						</Button>
					</Tooltip>
				</div>
			</div>
			<div className="mt-2">
				<span
					className={`text-sm ${isVisible ? "text-gray-800" : "text-gray-400"} break-all transition-all duration-200`}
				>
					{isVisible ? value : MASKED_FIELD}
				</span>
			</div>
		</div>
	)
}

export default SensitiveField
