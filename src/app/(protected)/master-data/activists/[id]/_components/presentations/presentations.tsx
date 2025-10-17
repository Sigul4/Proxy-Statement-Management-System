import { SectionCard } from "@/components/section-card"
import PresentationItem from "./presentation-item"

const ITEMS = [
	{
		id: 1,
		name: "A strong Sony",
		company: "SONY",
		src: "/assets/pdf.svg"
	},
	{
		id: 2,
		name: "#RefreshTheRecipe",
		company: "CAMPBELL",
		src: "/assets/pdf.svg"
	},
	{
		id: 3,
		name: "NestleNOW",
		company: "NestleNOW",
		src: "/assets/word.svg"
	},
	{
		id: 4,
		name: "Investo Presentation - Sotheby’s",
		company: "SOTHEBYS",
		src: "/assets/pdf.svg"
	},
	{
		id: 5,
		name: "#RefreshTheRecipe",
		company: "CAMPBELL",
		src: "/assets/pdf.svg"
	}
]

export default function Presentations() {
	return (
		<SectionCard title="Presentations">
			<div className="flex gap-8">
				{ITEMS.map(item => (
					<PresentationItem key={item.id} {...item} />
				))}
			</div>
		</SectionCard>
	)
}
