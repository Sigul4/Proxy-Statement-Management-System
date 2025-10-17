/** @type {import("prettier").Config} */
export default {
	printWidth: 120,
	semi: false,
	singleQuote: false,
	jsxSingleQuote: false,
	quoteProps: "consistent",
	tabWidth: 2,
	trailingComma: "none",
	useTabs: true,
	endOfLine: "lf",
	arrowParens: "avoid",
	plugins: ["prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false
			}
		}
	]
}
