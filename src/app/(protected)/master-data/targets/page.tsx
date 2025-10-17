import { SectionCard } from "@/components/section-card"
import MasterDataNav from "../_components/master-data-nav"
import { TARGETS_COLUMNS } from "./_components/targets-data-table/columns"
import { TargetsDataTable } from "./_components/targets-data-table/targets-data-table"
import { TARGET_DATA } from "./data"

export default function MasterDataTargetsPage() {
	return (
		<>
			<MasterDataNav />
			<div className="flex flex-col gap-8">
				<SectionCard title="Campaigns list" toolbar={<></>} leftToolbar={<></>}>
					<TargetsDataTable data={TARGET_DATA} columns={TARGETS_COLUMNS} />
				</SectionCard>
			</div>
		</>
	)
}
