import { SectionCard } from "@/components/section-card"
import MasterDataNav from "../_components/master-data-nav"
import { CampaignsDataTable } from "./_components/campaigns-data-table/campaigns-data-table"
import { CAMPAIGNS_COLUMNS } from "./_components/campaigns-data-table/columns"
import CampaignsTableLeftToolbar from "./_components/campaigns-table-left-toolbar"
import CampaignsToolbar from "./_components/campaigns-toolbar"
import { CAMPAIGNS_DATA } from "./data"

export default function MasterDataCampaignsPage() {
	function handleSearch() {
		console.log("search")
	}

	return (
		<>
			<MasterDataNav />
			<div className="flex flex-col gap-8">
				<SectionCard title="Campaigns list" toolbar={<CampaignsToolbar />} leftToolbar={<CampaignsTableLeftToolbar />}>
					<CampaignsDataTable data={CAMPAIGNS_DATA} columns={CAMPAIGNS_COLUMNS} />
				</SectionCard>
			</div>
		</>
	)
}
