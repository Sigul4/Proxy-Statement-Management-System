import { SectionCard } from "@/components/section-card"
import Image from "next/image"
import { ActivistItem } from "../../../types"

interface Props {
	item: ActivistItem
}

export default function ActivistDetails({ item }: Props) {
	return (
		<SectionCard title="Details">
			<div className="flex gap-8">
				<Image src={item.activistImageSrc} alt="Activist" width={200} height={200} priority />
				<div>
					<p>
						Name: <span>{item.type}</span>
					</p>
					<p>Origin:</p>
					<p>AUM:</p>
					<p>Focus:</p>
					<p>Key Personnel:</p>
					<p>Description:</p>
					<div className="flex items-center gap-4">
						<p className="text-sm text-[#999]">
							Name: <span>{item.name}</span>
						</p>
					</div>

					<p className="text-sm text-gray-500">Origin: </p>
					<p className="text-sm text-gray-500">AUM: {item.focus}</p>
					<p className="text-sm text-gray-500">Focus: {item.campaigns} campaigns</p>
					<p className="text-sm text-gray-500">Key personnel: ${item.aum} AUM</p>
					<p className="text-sm text-gray-500">Description: ${item.trailing13dReturn1day} trailing 13D return 1 day</p>
				</div>
			</div>
		</SectionCard>
	)
}
