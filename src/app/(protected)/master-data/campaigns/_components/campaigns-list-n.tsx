"use client"
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"
import { TCampaing } from "../_types/campaings-list-type"
import { IconEeuu } from "./icon-eeuu"

export function CampaignsList() {
	const items: TCampaing[] = [
		{
			id: "uuid_1",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_2",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_3",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_4",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_5",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_6",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_7",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_8",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_9",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_10",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_11",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_12",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_13",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_14",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		},
		{
			id: "uuid_15",
			fillingsDate: "2021-01-01",
			closing: "2021-01-01",
			activist: "Activist",
			target: "Target",
			objective: "Objective",
			marketCap: "Market Cap",
			positionSize: "Position size",
			stake: "Stake",
			return: "Return",
			abnormalReturn: "Abnormal return",
			proxyContestDate: "2021-01-01",
			settlementDate: "2021-01-01",
			outcome: "Outcome"
		}
	]
	const columns: ColumnDef<TCampaing>[] = [
		{
			accessorKey: "fillingsDate",
			header: "Fillings date",
			cell: ({ cell, row }) => {
				return (
					<div className="flex items-center gap-2">
						<div className="w-8  px-3 py-3">
							<IconEeuu />
						</div>
						<span className="text-nowrap">{row.original.fillingsDate}</span>
					</div>
				)
			}
		},
		{ accessorKey: "closing", header: "Closing (stake end)" },
		{ accessorKey: "activist", header: "Activist" },
		{ accessorKey: "target", header: "Target" },
		{ accessorKey: "objective", header: "Objective" },
		{ accessorKey: "marketCap", header: "Market Cap	" },
		{ accessorKey: "positionSize", header: "Position size" },
		{ accessorKey: "stake", header: "Stake" },
		{ accessorKey: "return", header: "Return" },
		{ accessorKey: "abnormalReturn", header: "Abnormal return" },
		{ accessorKey: "proxyContestDate", header: "Proxy contest date" },
		{ accessorKey: "settlementDate", header: "Settlement date" },
		{ accessorKey: "outcome", header: "Outcome" }
	]
	return (
		<div>
			<DataTable columns={columns} data={items} />
		</div>
	)
}
