import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const columns = ["Company name", "Close", "% Change"]
const data = [
	{
		icon: <div className="h-4 w-4 rounded-full bg-[#4B7685]" />,
		name: "Daimler AG",
		close: "€74.00",
		change: "+0.12%"
	},
	{
		icon: <div className="h-4 w-4 rounded-full bg-[#D7C961]" />,
		name: "S&P 500 ETF",
		close: "$74.00",
		change: "+0.12%"
	}
]

export default function PerformanceVsPeersTable() {
	return (
		<div className="border-t border-[#F1F1F5]">
			<Table className="border-[#F1F1F5]">
				<TableHeader>
					<TableRow className="text-xs">
						{columns.map(column => (
							<TableHead key={column} className="text-start font-normal tracking-wider text-[#A1A1A1]">
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
									{data.icon}
									<span>{data.name}</span>
								</div>
							</TableCell>
							<TableCell className="gap-2 font-semibold">
								<div className="flex items-center gap-2">
									<span>{data.close}</span>
								</div>
							</TableCell>
							<TableCell>{data.change}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
