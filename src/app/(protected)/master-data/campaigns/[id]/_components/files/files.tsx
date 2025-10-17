import { SectionCard } from "@/components/section-card"
import FileItem from "./file-item"

const ITEMS = [
	{
		id: 1,
		name: "File 1",
		size: "1.2 MB",
		date: "2021-08-01",
		src: "/assets/pdf.svg"
	},
	{
		id: 2,
		name: "File 2",
		size: "1.2 MB",
		date: "2021-08-01",
		src: "/assets/pdf.svg"
	},
	{
		id: 3,
		name: "File 3",
		size: "1.2 MB",
		date: "2021-08-01",
		src: "/assets/pdf.svg"
	}
]

export default function Files() {
	return (
		<SectionCard title="Files">
			<div className="flex gap-8">
				{ITEMS.map(item => (
					<FileItem key={item.id} {...item} />
				))}
			</div>
		</SectionCard>
	)
}
