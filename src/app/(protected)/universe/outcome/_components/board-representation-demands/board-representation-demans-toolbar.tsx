"use client"

import DownloadSectionAsImageButton from "@/components/download-section-as-image-button"
import { ChartData } from "chart.js/auto"
import { useOutcomesStore } from "../../_store/outcomes-store"

interface Props {
	data: ChartData
}

export default function BoardRepresentationDemansToolbar({ data }: Props) {
	const chart = useOutcomesStore(state => state.proxyContestResultChart)

	return (
		<div className="flex items-center gap-8">
			<div>
				<DownloadSectionAsImageButton
					name="outcome-of-board-representation-demands"
					chart={chart}
					elementId="outcome-of-board-representation-demands"
				/>
			</div>
		</div>
	)
}
