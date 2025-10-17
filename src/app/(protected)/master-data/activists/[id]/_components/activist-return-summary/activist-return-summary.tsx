import { SectionCard } from "@/components/section-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const COLUMNS = ["Time", "YTD", "1 Year", "3 Year", "5 Year", "10 Year", "20 Year", "30 Year"]

const DATA = [
	{
		time: "13D trailing return",
		ytd: "Value",
		oneYear: "Value",
		threeYear: "Value",
		fiveYear: "Value",
		tenYear: "Value",
		twentyYear: "Value",
		thirtyYear: "Value"
	},
	{
		time: "Peer average",
		ytd: "Value",
		oneYear: "Value",
		threeYear: "Value",
		fiveYear: "Value",
		tenYear: "Value",
		twentyYear: "Value",
		thirtyYear: "Value"
	},
	{
		time: "Follower return",
		ytd: "Value",
		oneYear: "Value",
		threeYear: "Value",
		fiveYear: "Value",
		tenYear: "Value",
		twentyYear: "Value",
		thirtyYear: "Value"
	},
	{
		time: "Peer average",
		ytd: "Value",
		oneYear: "Value",
		threeYear: "Value",
		fiveYear: "Value",
		tenYear: "Value",
		twentyYear: "Value",
		thirtyYear: "Value"
	},
	{
		time: "S&P 500",
		ytd: "Value",
		oneYear: "Value",
		threeYear: "Value",
		fiveYear: "Value",
		tenYear: "Value",
		twentyYear: "Value",
		thirtyYear: "Value"
	}
]

export default function ActivistReturnSummary() {
	return (
		<SectionCard title="Activist return summary">
			<Table className="border-[#F1F1F5]">
				<TableHeader>
					<TableRow className="text-xs text-[#777]">
						{COLUMNS.map(column => (
							<TableHead key={column} className="text-center first:text-start">
								{column}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody className="border-b">
					{DATA.map((data, index) => (
						<TableRow key={index} className="text-xs text-[#1B1B1B]">
							<TableCell className="w-52 border-r py-4 first:border-r-[#F1F1F5]">{data.time}</TableCell>
							<TableCell className="text-center">{data.ytd}</TableCell>
							<TableCell className="text-center">{data.oneYear}</TableCell>
							<TableCell className="text-center">{data.threeYear}</TableCell>
							<TableCell className="text-center">{data.fiveYear}</TableCell>
							<TableCell className="text-center">{data.tenYear}</TableCell>
							<TableCell className="text-center">{data.twentyYear}</TableCell>
							<TableCell className="text-center">{data.thirtyYear}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</SectionCard>
	)
}
