import { SectionCard } from "@/components/section-card"
import Image from "next/image"
import { CampaignsItem } from "../../../types"

interface Props {
	item: CampaignsItem
}

export default function Details({ item }: Props) {
	return (
		<SectionCard title="Details">
			<div className="grid grid-cols-3 gap-8">
				<div className="flex gap-8 px-6">
					<div className="relative h-40 w-40">
						<Image src={item.activistImageSrc} fill alt="activist" unoptimized />
					</div>
					<div className="relative h-40 w-40">
						<Image src={item.targetImageSrc} fill alt="target" unoptimized />
					</div>
				</div>
				<div className="flex flex-col gap-4 border-l px-6">
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Year:</h3>
						<p>{item.activist}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Number:</h3>
						<p>{item.marketCap}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Campaign Live:</h3>
						<p>{item.positionSize}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Date:</h3>
						<p>{item.stake}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Size of investment:</h3>
						<p>{item.return}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Demand type:</h3>
						<p>{item.abnormalReturn}</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 border-l px-6">
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Return:</h3>
						<p>{item.fillingsDate}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Outcomes:</h3>
						<p>{item.closing}</p>
					</div>
					<div>
						<h3 className="text-sm text-[#999]">Description of the campaign:</h3>
						<p>
							Third Point LLC initiated an activist campaign at SiriusPoint Ltd. after the company experienced
							significant challenges following the 2021 merger of Third Point Reinsurance Ltd. and Sirius International
							Insurance Group. The campaign focused on addressing
						</p>
					</div>
				</div>
			</div>
		</SectionCard>
	)
}
