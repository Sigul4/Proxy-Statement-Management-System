import { IconShare } from "@/components/icons/icon-share"
import { Chart } from "chart.js/auto"
import downloadjs from "downloadjs"
import * as htmlToImage from "html-to-image"

interface Props {
	chart: Chart | null
	name: string
	elementId: string
}

export default function DownloadSectionAsImageButton({ chart, name, elementId }: Props) {
	function handleShare() {
		if (!chart) return

		const now = Date.now()
		const fileName = `${name}-${now}`

		const domCard = document.getElementById(elementId)
		if (!domCard) return

		htmlToImage
			.toPng(domCard, {
				filter: node => !node.classList?.contains("html-to-image-hidden")
			})
			.then(function (dataUrl) {
				downloadjs(dataUrl, `${fileName}.png`)
			})
	}

	return (
		<button
			className="html-to-image-hidden flex items-center rounded-md bg-[#F1F1F5] p-2 text-neutral-500 hover:bg-neutral-200"
			onClick={handleShare}
		>
			<IconShare />
		</button>
	)
}
