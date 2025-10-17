import IconClock from "./icon-clock"

function calculateReadingTime(content: string) {
	const wordsPerMinute = 170 // Average case
	let result

	let textLength = content.split(" ").length // Split by words
	if (textLength > 0) {
		let value = Math.ceil(textLength / wordsPerMinute)
		result = `${value} min read`
	}

	return result
}

export default function ChipReadingTime({ content }: { content: string }) {
	const readingTime = calculateReadingTime(content)

	return (
		<div className="flex h-min items-center gap-2 rounded-3xl bg-[#ffffff1a] bg-opacity-90 px-4 py-2 tracking-[0.8px] text-white backdrop-blur-md">
			<IconClock />
			{readingTime}
		</div>
	)
}
