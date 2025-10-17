export function splitLongText(text: string, maxLength: number) {
	if (text.length <= maxLength) {
		return [text]
	}

	const words = text.split(" ")
	const lines = []
	let currentLine = ""
	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		if (currentLine.length + word.length <= maxLength) {
			currentLine += word + " "
		} else {
			lines.push(currentLine)
			currentLine = word + " "
		}
	}
	lines.push(currentLine)
	return lines
}

export function firstToUpper(text: string) {
	return text[0].toUpperCase() + text.slice(1)
}
