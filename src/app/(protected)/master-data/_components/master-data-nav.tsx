import { PageHeader } from "../../_components/page-header/page-header"

const HEADER_ITEMS = [
	{
		label: "Campaigns",
		href: "/master-data/campaigns"
	},
	{
		label: "Activists",
		href: "/master-data/activists"
	},
	{
		label: "Targets",
		href: "/master-data/targets"
	}
]

export default function MasterDataNav() {
	return <PageHeader title="Master data" items={HEADER_ITEMS} />
}
