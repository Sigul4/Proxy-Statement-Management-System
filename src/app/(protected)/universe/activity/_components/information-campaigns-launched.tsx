"use client"

import { useState } from "react"
import { Information } from "../../_components/information"

export default function InformationCampaignsLaunched() {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Information
			description="The chart shows the number of campaigns launched from 2015 to 2024: dark blue bars represent successful
	campaigns, and red bars represent unsuccessful ones. On the right, the most active investors are listed with the
	number of campaigns in the past year and the 5-year average. Additionally, the largest campaigns are shown with
	their value in the past year and the 5-year average."
			isOpen={isOpen}
			setIsOpen={() => setIsOpen(false)}
		/>
	)
}
