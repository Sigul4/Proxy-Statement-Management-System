import { SectionCard } from "@/components/section-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const columns = ["Metrics", "FY2020", "FY2021", "FY2022", "FY2023"]
const data = [
	{
		metrics: "Implied ARR (USD MM)",
		fy2020: "1,000",
		fy2021: "1,200",
		fy2022: "1,400",
		fy2023: "1,600"
	},
	{
		metrics: "Implied ARR growth (%)",
		fy2020: "20%",
		fy2021: "20%",
		fy2022: "20%",
		fy2023: "20%"
	},
	{
		metrics: "Implied ARR growth (USD MM)",
		fy2020: "200",
		fy2021: "240",
		fy2022: "280",
		fy2023: "320"
	},
	{
		metrics: "Implied ARR growth (USD MM)",
		fy2020: "200",
		fy2021: "240",
		fy2022: "280",
		fy2023: "320"
	},
	{
		metrics: "Implied ARR growth (USD MM)",
		fy2020: "200",
		fy2021: "240",
		fy2022: "280",
		fy2023: "320"
	},
	{
		metrics: "Implied ARR growth (USD MM)",
		fy2020: "200",
		fy2021: "240",
		fy2022: "280",
		fy2023: "320"
	},
	{
		metrics: "Implied ARR growth (USD MM)",
		fy2020: "200",
		fy2021: "240",
		fy2022: "280",
		fy2023: "320"
	},
	{
		metrics: "Implied ARR growth (USD MM)",
		fy2020: "200",
		fy2021: "240",
		fy2022: "280",
		fy2023: "320"
	}
]

export default function KeyValuationMetrics() {
	return (
		<SectionCard title="Key valuation metrics">
			<Table className="border-[#F1F1F5]">
				<TableHeader>
					<TableRow className="py-0 text-xs">
						{columns.map(column => (
							<TableHead key={column} className="px-0 py-1 text-start font-normal tracking-wider text-[#A1A1A1]">
								{column}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody className="border-b">
					{data.map((data, index) => (
						<TableRow key={index} className="text-xs font-medium tracking-wide text-[#1B1B1B]">
							<TableCell className="px-0 py-4">{data.metrics}</TableCell>
							<TableCell className="gap-2 px-0 font-semibold">{data.fy2020}</TableCell>
							<TableCell className="px-0">{data.fy2021}</TableCell>
							<TableCell className="px-0">{data.fy2022}</TableCell>
							<TableCell className="px-0">{data.fy2023}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</SectionCard>
	)
}
