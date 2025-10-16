import { SectionCard } from "@/components/section-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

const columns = ["Date", "Activist", "Objective", "Objective", "Reaction"]
const data = [
	{
		date: "Jan 2019 - Dec 2019",
		activistIconSrc: "/data-logos/elliott-investment.png",
		activist: "Elliott Investment",
		objective1: "Increase dividend, sell non-core assets",
		objective2: "Partial agreement, increased dividend",
		reaction: "+15% stock price increase"
	},
	{
		date: "Mar 2021 - Sep 2021",
		activistIconSrc: "/data-logos/trian-partners.png",
		activist: "Trian Partners",
		objective1: "Board restructuring, cost cuts",
		objective2: "Agreement on board changes, cost-cutting plan implemented",
		reaction: "+10% stock price increase"
	}
]

export default function PreviousCampaignsOnTarget() {
	return (
		<SectionCard title="Previous campaigns on target">
			<Table className="border-[#F1F1F5]">
				<TableHeader>
					<TableRow className="text-xs">
						{columns.map(column => (
							<TableHead key={column} className="font-normal tracking-wider text-[#A1A1A1]">
								{column}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody className="border-b">
					{data.map((data, index) => (
						<TableRow key={index} className="text-xs font-medium text-[#1B1B1B]">
							<TableCell className="py-4">{data.date}</TableCell>
							<TableCell className="gap-2 font-semibold">
								<div className="flex items-center gap-2">
									<Image
										src={data.activistIconSrc}
										width={20}
										height={20}
										alt="Activist icon"
										className="rounded-full"
									/>
									<span>{data.activist}</span>
								</div>
							</TableCell>
							<TableCell>{data.objective1}</TableCell>
							<TableCell>{data.objective2}</TableCell>
							<TableCell>{data.reaction}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</SectionCard>
	)
}
