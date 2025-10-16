"use client"

import { DataTimeFilterStoreDialog } from "../../../_components/data-time-filter/data-time-filter-dialog"
import CampaignsLaunchedFilterDropdown from "./campaigns-launched-filter-dropdown"

export function AllTimeFilterButton() {
	return (
		<>
			<CampaignsLaunchedFilterDropdown />
			<DataTimeFilterStoreDialog />
		</>
	)
}
