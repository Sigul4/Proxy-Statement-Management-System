import WishlistButton from "@/components/wishlist-button"
import { notFound } from "next/navigation"
import BackButton from "../../_components/back-button"
import MoreOptionsButton from "../../_components/more-options-button"
import { CAMPAIGNS_DATA } from "../data"
import CampaignEvolution from "./_components/campaign-evolution/campaign-evolution"
import Details from "./_components/details/details"
import DisclosurePeriod from "./_components/disclosure-period/disclosure-period"
import Files from "./_components/files/files"

interface Props {
	params: {
		id: number
	}
}

export default function MasterDataCampaignDetailsPage({ params: { id } }: Props) {
	const item = CAMPAIGNS_DATA.find(item => item.id === Number(id))
	if (!item) return notFound()

	const { activist, target } = item

	return (
		<div className="flex flex-col gap-8">
			<header className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-8">
					<BackButton href="/master-data/campaigns" />
					<h2 className="text-3xl">
						{activist} v. {target}
					</h2>
				</div>
				<div className="flex items-center gap-5">
					<MoreOptionsButton />
					<WishlistButton />
				</div>
			</header>
			<Details item={item} />
			<CampaignEvolution />
			<DisclosurePeriod />
			<Files />
		</div>
	)
}
