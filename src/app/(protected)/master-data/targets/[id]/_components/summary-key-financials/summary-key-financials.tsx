import { SectionCard } from "@/components/section-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const columns = ["Financials", "FY2022", "FY2023", "FY2024E", "FY2025E"]
const data = [
	{
		financials: "Net Revenue (USD MM)",
		fy2022: "1,000",
		fy2023: "1,200",
		fy2024: "1,400",
		fy2025: "1,600"
	},
	{
		financials: "EBITDA (USD MM)",
		fy2022: "100",
		fy2023: "120",
		fy2024: "140",
		fy2025: "160"
	},
	{
		financials: "EBITDA Margin (%)",
		fy2022: "10%",
		fy2023: "10%",
		fy2024: "10%",
		fy2025: "10%"
	},
	{
		financials: "Net Income (USD MM)",
		fy2022: "50",
		fy2023: "60",
		fy2024: "70",
		fy2025: "80"
	},
	{
		financials: "EPS (USD)",
		fy2022: "1.00",
		fy2023: "1.20",
		fy2024: "1.40",
		fy2025: "1.60"
	},
	{
		financials: "Dividends (USD)",
		fy2022: "0.50",
		fy2023: "0.60",
		fy2024: "0.70",
		fy2025: "0.80"
	},
	{
		financials: "Dividend Yield (%)",
		fy2022: "5%",
		fy2023: "5%",
		fy2024: "5%",
		fy2025: "5%"
	},
	{
		financials: "FCF (USD MM)",
		fy2022: "50",
		fy2023: "60",
		fy2024: "70",
		fy2025: "80"
	},
	{
		financials: "FCF Yield (%)",
		fy2022: "5%",
		fy2023: "5%",
		fy2024: "5%",
		fy2025: "5%"
	}
]

export default function SummaryKeyFinancials() {
	return (
		<SectionCard title="Summary key financials (vs. previous)">
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
							<TableCell className="px-0 py-[13px]">{data.financials}</TableCell>
							<TableCell className="px-0">{data.fy2022}</TableCell>
							<TableCell className="px-0">{data.fy2023}</TableCell>
							<TableCell className="px-0">{data.fy2024}</TableCell>
							<TableCell className="px-0">{data.fy2025}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</SectionCard>
	)
}
