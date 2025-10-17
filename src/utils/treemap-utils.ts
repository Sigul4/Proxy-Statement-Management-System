type HexColor = `#${string}`

function isValidHexColor(color: string): color is HexColor {
	return /^#[0-9A-Fa-f]{6}$/.test(color)
}

function interpolateColor(color1: HexColor, color2: HexColor, factor: number): string {
	const result = color1
		.slice(1)
		.match(/.{2}/g)!
		.map((hex, index) => {
			const value1 = parseInt(hex, 16)
			const value2 = parseInt(color2.slice(1).match(/.{2}/g)![index], 16)
			const interpolated = Math.round(value1 + factor * (value2 - value1))
			return interpolated.toString(16).padStart(2, "0")
		})
	return "#" + result.join("")
}

export function getColorFromValue(value: number): string {
	const colorMax: HexColor = "#3A5A66"
	const colorMid: HexColor = "#89C5D4"
	const colorMin: HexColor = "#1B1B1B"

	if (value >= 0) {
		const factor = value / 100
		return interpolateColor(colorMid, colorMax, factor)
	} else {
		const factor = (value + 100) / 100
		return interpolateColor(colorMin, colorMid, factor)
	}
}
