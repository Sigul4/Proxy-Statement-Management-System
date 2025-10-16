"use client"

import { useState } from "react"
import { Information } from "../../_components/information"

const description =
	"These charts provide information on the performance and returns of investment campaigns. The 'Financial Returns' charts display overall returns and filing day returns, where each dot represents a campaign's outcome over different years. The 'Return Analytics' charts offer a more detailed analysis of returns, considering the length of the campaign, market capitalization, sector, and demand type. By default, all charts show 'Return' with an option to switch to 'Abnormal Return.' Use these charts to visually compare and analyze the performance of various campaigns and activists to identify trends and anomalies."

export default function InformationPortfolio() {
	const [isOpen, setIsOpen] = useState(true)

	return <Information description={description} isOpen={isOpen} setIsOpen={setIsOpen} />
}
