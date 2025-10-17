import { SectionCard } from "@/components/section-card"
import MasterDataNav from "../_components/master-data-nav"
import ActivistsDataTable from "./_components/activists-data-table/activists-data-table"
import { ACTIVISTS_COLUMNS } from "./_components/activists-data-table/columns"
import ActivistsLeftToolbar from "./_components/activists-left-toolbar"
import ActivistsToolbar from "./_components/activists-toolbar"
import { ACTIVISTS_DATA } from "./data"

export default function MasterDataActivistsPage() {
	return (
		<>
			<MasterDataNav />
			<div className="flex flex-col gap-8">
				<SectionCard title="Activists list" toolbar={<ActivistsToolbar />} leftToolbar={<ActivistsLeftToolbar />}>
					<ActivistsDataTable columns={ACTIVISTS_COLUMNS} data={ACTIVISTS_DATA} />
				</SectionCard>
			</div>
		</>
	)
}
