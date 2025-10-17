import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { TopTenMostActive } from "../../types"
import { CampaingBarIndicator } from "../campaigns-launched/campaing-bar-indicator"

interface Props {
	data: TopTenMostActive[]
}

export default function MostActive({ data }: Props) {
	const maxNumberCampaigns = Math.max(...data.map(item => item.oneYearRollingCount))
	const maxAverageCampaigns = Math.max(...data.map(item => item.fiveYearAverage))

	return (
		<Table className="w-full border-separate">
			<TableHeader>
				<TableRow>
					<TableHead className="p-0 pb-2">
						<div className="flex items-start">
							<p className="text-start text-micro font-normal tracking-wide text-neutral-500">Activist</p>
						</div>
					</TableHead>
					<TableHead className="px-3 py-0 pb-2">
						<div className="flex items-start">
							<p className="text-start text-micro font-normal tracking-wide text-neutral-500">
								Number campaigns
								<br />
								(1-year rolling)
							</p>
						</div>
					</TableHead>
					<TableHead className="px-3 py-0 pb-2">
						<div className="flex items-start">
							<p className="text-start text-micro font-normal tracking-wide text-neutral-500">
								5-year average
								<br />
								number of campaigns
							</p>
						</div>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map(item => (
					<TableRow key={item.activistName}>
						<TableCell className="w-56 items-center gap-2 py-2 pl-0 pr-2 text-micro tracking-wide text-zinc-900">
							<div className="flex w-full items-center gap-2">
								<Image
									alt="Image"
									className="size-6 rounded-full border border-gray-100"
									src={"/data-logos/starboard-value.png"}
									width={24}
									height={24}
								/>
								<span className="text-micro font-normal">{item.activistName}</span>
							</div>
						</TableCell>
						<TableCell className="px-3 py-0">
							<div className="flex items-center gap-4">
								<span className="w-4 text-xs font-semibold tracking-wide text-zinc-900">
									{item.oneYearRollingCount}
								</span>
								<CampaingBarIndicator value={item.oneYearRollingCount} maxValue={maxNumberCampaigns} />
							</div>
						</TableCell>
						<TableCell className="px-3 py-0 text-xs tracking-wide text-zinc-900">
							<div className="flex items-center gap-4">
								<span className="w-4 text-xs font-semibold tracking-wide text-zinc-900">{item.fiveYearAverage}</span>
								<CampaingBarIndicator value={item.fiveYearAverage} maxValue={maxAverageCampaigns} />
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
