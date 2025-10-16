import { SectionCard } from "@/components/section-card"
import Image from "next/image"
import { TargetItem } from "../../../types"

interface Props {
	item: TargetItem
}

export default function Details({ item }: Props) {
	return (
		<SectionCard title="Details">
			<div className="flex gap-8">
				<div className="flex h-fit min-w-40 gap-8 px-6">
					<Image src={item.comapanyLogoSrc} width={160} height={160} alt="activist" unoptimized />
				</div>
				<div className="flex flex-col gap-4 border-l px-6">
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Name:</h3>
						<p>{item.companyName}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Sector:</h3>
						<p>{item.sector}</p>
					</div>
					<div className="flex gap-2">
						<h3 className="text-sm text-[#999]">Key Personnel:</h3>
						<p>Ola Källenius | CEO</p>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<h3 className="text-sm text-[#999]">Description:</h3>
							<p>
								The Mercedes-Benz Group AG (former Daimler AG) is one of the world&apos;s most successful automotive
								companies. With Mercedes-Benz AG, we are one of the leading global suppliers of high-end passenger cars
								and premium vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental,
								fleet management, digital services for charging and payment, insurance brokerage.
							</p>
						</div>
					</div>
				</div>
			</div>
		</SectionCard>
	)
}
