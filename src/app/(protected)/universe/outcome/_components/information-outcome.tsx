"use client"

import { useState } from "react"
import { Information } from "../../_components/information"

const description =
	"These charts help analyze various characteristics of target companies and activists. The graphs labeled 'Position Metrics' are scatter plots showing market capitalization of targets, initial size of position, and stake at filing date, with each dot representing a company. The charts labeled 'Target Characteristics' are bar charts displaying sector breakdown of targets, types of activists, and demand breakdown. The chart at the bottom shows the length of campaigns. Use these charts to visually compare data and identify trends."

export default function InformationOutcome() {
	const [isOpen, setIsOpen] = useState(true)

	return <Information description={description} isOpen={isOpen} setIsOpen={setIsOpen} />
}
