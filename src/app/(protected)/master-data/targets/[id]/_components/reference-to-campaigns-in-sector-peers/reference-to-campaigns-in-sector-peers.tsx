import { SectionCard } from "@/components/section-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

const columns = [
	"Filings date",
	"Closing (stake end)",
	"Activist",
	"Target",
	"Objective",
	"Market Cap",
	"Position size",
	"Stake",
	"Return",
	"Abnormal return"
]
const data = [
	{
		countryIconSrc: "/assets/master-data/united-states.svg",
		filingsDate: "15/05/2022",
		closingStakeEnd: "10/03/2023",
		activistIconSrc: "/data-logos/elliott-investment.png",
		activist: "Elliott Mgmt",
		targetIconSrc: "/data-logos/salesforce.png",
		target: "Salesforce",
		objective: "Improve governance",
		marketCap: "$100B",
		positionSize: "$1B",
		stake: "10%",
		return: "10%",
		abnormalReturn: "10%"
	},
	{
		countryIconSrc: "/assets/master-data/united-states.svg",
		filingsDate: "15/05/2022",
		closingStakeEnd: "10/03/2023",
		activistIconSrc: "/data-logos/third-point.png",
		activist: "Third Point",
		targetIconSrc: "/data-logos/sirius-point.png",
		target: "Sirius Point",
		objective: "Strategic asset divestiture",
		marketCap: "$100B",
		positionSize: "$1B",
		stake: "10%",
		return: "10%",
		abnormalReturn: "10%"
	}
]

export default function ReferenceToCampaignsInSectorPeers() {
	return (
		<SectionCard title="Reference to campaigns in sector peers">
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
							<TableCell className="py-4">
								<div className="flex items-center gap-2">
									<Image
										src={data.countryIconSrc}
										width={16}
										height={16}
										alt="Activist icon"
										className="rounded-full"
									/>
									<span>{data.filingsDate}</span>
								</div>
							</TableCell>
							<TableCell className="w-28">{data.closingStakeEnd}</TableCell>
							<TableCell>
								<div className="flex items-center gap-2">
									<Image
										src={data.activistIconSrc}
										width={16}
										height={16}
										alt="Activist icon"
										className="rounded-full"
									/>
									<span>{data.activist}</span>
								</div>
							</TableCell>
							<TableCell>
								<div className="flex items-center gap-2">
									<Image src={data.targetIconSrc} width={16} height={16} alt="Activist icon" className="rounded-full" />
									<span>{data.target}</span>
								</div>
							</TableCell>
							<TableCell>{data.objective}</TableCell>
							<TableCell>{data.marketCap}</TableCell>
							<TableCell>{data.positionSize}</TableCell>
							<TableCell>{data.stake}</TableCell>
							<TableCell>{data.return}</TableCell>
							<TableCell>{data.abnormalReturn}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</SectionCard>
	)
}
