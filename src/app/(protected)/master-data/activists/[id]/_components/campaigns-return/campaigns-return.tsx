import { SectionCard } from "@/components/section-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const columns = [
	"First filing date",
	"Target Company",
	"Form Type",
	"Campaign Performance (1st filling)",
	"Campaign Performance(1W)",
	"Campaign Performance(2W)",
	"Campaign Performance(1M)",
	"Campaign Performance(3M)",
	"Campaign Performance(6M)",
	"Campaign Performance(1Y)",
	"Campaign Performance (3Y)",
	"Abnormal Return",
	"Campaign Performance"
]

const data = [
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-03-06",
		targetCompany: "Comscore INC",
		formType: "SC13D",
		campaignPerformance1stFilling: -1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: -18.5,
		campaignPerformance1M: 2,
		campaignPerformance3M: -30.04,
		campaignPerformance6M: -40,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-02-14",
		targetCompany: "Comscore INC",
		formType: "SC13G",
		campaignPerformance1stFilling: -1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: -18.5,
		campaignPerformance1M: 2,
		campaignPerformance3M: -30.04,
		campaignPerformance6M: -40,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: null,
		targetCompany: "Armstrong Flooring Inc",
		formType: "SC13G",
		campaignPerformance1stFilling: -1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: -18.5,
		campaignPerformance1M: 2,
		campaignPerformance3M: -30.04,
		campaignPerformance6M: -40,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: null,
		targetCompany: "Armstrong Flooring Inc",
		formType: "SC13G",
		campaignPerformance1stFilling: -1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: -18.5,
		campaignPerformance1M: 2,
		campaignPerformance3M: -30.04,
		campaignPerformance6M: -40,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: null,
		targetCompany: "Armstrong Flooring Inc",
		formType: "SC13G",
		campaignPerformance1stFilling: -1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: -18.5,
		campaignPerformance1M: 2,
		campaignPerformance3M: -30.04,
		campaignPerformance6M: -40,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	},
	{
		firstFilingDate: "2023-12-04",
		targetCompany: "Sinchronoss Technologies INC",
		formType: "SC13D",
		campaignPerformance1stFilling: 1.53,
		campaignPerformance1W: -14.56,
		campaignPerformance2W: 18.5,
		campaignPerformance1M: null,
		campaignPerformance3M: 108.04,
		campaignPerformance6M: null,
		campaignPerformance1Y: null,
		campaignPerformance3Y: null,
		abnormalReturn: 20.95,
		campaignPerformance: 25.32
	}
]

export default function CampaignsReturn() {
	return (
		<SectionCard title="Campaign returns">
			<Table className="border-[#F1F1F5]">
				<TableHeader>
					<TableRow className="text-xs text-[#777]">
						{columns.map(column => (
							<TableHead key={column} className="text-center first:text-start">
								{column}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody className="border-b">
					{data.map((data, index) => (
						<TableRow key={index} className="text-xs text-[#1B1B1B]">
							<TableCell className="w-96 border-r py-4 first:border-r-[#F1F1F5]">{data.firstFilingDate}</TableCell>
							<TableCell className="text-center">{data.targetCompany}</TableCell>
							<TableCell className="text-center">{data.formType}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance1stFilling}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance1W}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance2W}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance1M}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance3M}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance6M}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance1Y}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance3Y}</TableCell>
							<TableCell className="text-center">{data.abnormalReturn}</TableCell>
							<TableCell className="text-center">{data.campaignPerformance}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</SectionCard>
	)
}
