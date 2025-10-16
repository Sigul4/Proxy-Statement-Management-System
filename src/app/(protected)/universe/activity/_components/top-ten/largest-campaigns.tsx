import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { TopTenLargestCampaigns } from "../../types"

const data = [
	{
		activist: "Trian Partners",
		activistIcon: "/data-logos/trian-partners.png",
		target: "Walt Disney",
		targetIcon: "/data-logos/walt-disney.png",
		stakeBn: "3.5",
		stakePercentual: "1.8%"
	},
	{
		activist: "Icahn Enterprises",
		activistIcon: "/data-logos/icahn-enterprises.png",
		target: "Illumina",
		targetIcon: "/data-logos/illumina.png",
		stakeBn: "2.3",
		stakePercentual: "1.4%"
	},
	{
		activist: "Elliott Investment",
		activistIcon: "/data-logos/elliott-investment.png",
		target: "Salesforce",
		targetIcon: "/data-logos/salesforce.png",
		stakeBn: ">2",
		stakePercentual: "1%"
	},
	{
		activist: "Pershing Square",
		activistIcon: "/data-logos/pershing-square.png",
		target: "Restaurant Brands",
		targetIcon: "/data-logos/restaurant-brands.png",
		stakeBn: "1.4",
		stakePercentual: "5.1%"
	},
	{
		activist: "Third Point",
		activistIcon: "/data-logos/third-point.png",
		target: "Sirius Point",
		targetIcon: "/data-logos/sirius-point.png",
		stakeBn: "1.4",
		stakePercentual: "9.31%"
	},
	{
		activist: "Starboard Value",
		activistIcon: "/data-logos/starboard-value.png",
		target: "GoDaddy",
		targetIcon: "/data-logos/go-daddy.png",
		stakeBn: "0.9",
		stakePercentual: "7.8%"
	},
	{
		activist: "Politan Capital",
		activistIcon: "/data-logos/politan-capital.png",
		target: "Masimo",
		targetIcon: "/data-logos/masimo.png",
		stakeBn: "0.8",
		stakePercentual: "9.2%"
	},
	{
		activist: "Starboard Value",
		activistIcon: "/data-logos/starboard-value.png",
		target: "Algonquin",
		targetIcon: "/data-logos/algonquin.png",
		stakeBn: "0.5",
		stakePercentual: "9.0%"
	},
	{
		activist: "Eminence capital",
		activistIcon: "/data-logos/eminence-capital.png",
		target: "Ashland",
		targetIcon: "/data-logos/ashland.png",
		stakeBn: "0.4",
		stakePercentual: "8.9%"
	},
	{
		activist: "Impactive Capital",
		activistIcon: "/data-logos/impactive-capital.png",
		target: "Marriott vacations",
		targetIcon: "/data-logos/marriott-vacations.png",
		stakeBn: "0.2",
		stakePercentual: "7.4%"
	}
]

const columns = ["Activist", "Target", "Stake ($bn)", "Stake (%)"]

interface Props {
	data: TopTenLargestCampaigns[]
}

export default function LargestCampaigns({ data }: Props) {
	return (
		<Table className="w-full border-separate">
			<TableHeader>
				<TableRow>
					{columns.map((column, index) => (
						<TableHead className="px-3 py-0 pb-2 first-of-type:p-0 first-of-type:pb-2" key={index}>
							<div className="flex items-start">
								<span className="text-start text-micro font-normal tracking-wide text-neutral-500">{column}</span>
							</div>
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((row, index) => (
					<TableRow key={index} className="w-full text-xs font-normal tracking-[0.48px] text-[#1B1B1B]">
						<TableCell className="items-center gap-2 py-2 pl-0 pr-2 text-micro tracking-wide text-zinc-900">
							<div className="flex w-full items-center gap-2">
								<Image
									src={"/data-logos/starboard-value.png"}
									width={24}
									height={24}
									alt="Activist icon"
									className="rounded-full"
									unoptimized
								/>
								<span className="text-micro font-normal">{row.activistName}</span>
							</div>
						</TableCell>
						<TableCell className="items-center gap-2 px-3 py-2 pl-0 pr-2 text-micro tracking-wide text-zinc-900">
							<div className="flex w-full items-center gap-2">
								<Image
									src={"/data-logos/trian-partners.png"}
									width={24}
									height={24}
									alt="Target icon"
									className="rounded-full"
									unoptimized
								/>
								<span className="text-xs">{row.targetCompanyName}</span>
							</div>
						</TableCell>
						<TableCell className="min-w-20 p-0 px-3 py-0 font-semibold tracking-[0.48px] text-[#1B1B1B]">
							{row.firstFilingPosition ? `${row.firstFilingPosition}` : "-"}
						</TableCell>
						<TableCell className="min-w-20 p-0 px-3 py-0 font-semibold tracking-[0.48px] text-[#1B1B1B]">
							{row.firstFilingPctOfClass ? `${row.firstFilingPctOfClass}` : "-"}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
