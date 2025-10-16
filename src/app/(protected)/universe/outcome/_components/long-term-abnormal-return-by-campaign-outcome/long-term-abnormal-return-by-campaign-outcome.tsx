import { SectionCard } from "@/components/section-card"
import { primaryColors } from "@/constants/chart-colors"
import { ChartData } from "chart.js/auto"
import LongTermAbnormalReturnByCampaignOutcomeChart from "./long-term-abnormal-return-by-campaign-outcome-chart"
import LongTermAbnormalReturnByCampaignOutcomeToolbar from "./long-term-abnormal-return-by-campaign-outcome-toolbar"

const data: ChartData = {
	labels: [
		"Unsuccessful",
		"Partially successful",
		"Successful",
		"Compromise/Settlement",
		"Withdrawn demand",
		"Ongoing",
		"Passive",
		"Other"
	],
	datasets: [
		{
			label: "1-year return",
			data: [2, 3, 3, 9, 2, 3, 3, 9],
			backgroundColor: primaryColors[0],
			borderRadius: 4
		},
		{
			label: "2-year return",
			data: [3, 8, 10, 16, 3, 8, 10, 16],
			backgroundColor: primaryColors[1],
			borderRadius: 4
		},
		{
			label: "3-year return",
			data: [5, 14, 17, 19, 5, 14, 17, 19],
			backgroundColor: primaryColors[2],
			borderRadius: 4
		}
	]
}

export default function LongTermAbnormalReturnByCampaignOutcome() {
	return (
		<SectionCard
			id="long-term-abnormal-return-by-campaign-outcome"
			title="Long-term abnormal return by campaign outcome"
			toolbar={<LongTermAbnormalReturnByCampaignOutcomeToolbar data={data} />}
		>
			<LongTermAbnormalReturnByCampaignOutcomeChart data={data} />
		</SectionCard>
	)
}
