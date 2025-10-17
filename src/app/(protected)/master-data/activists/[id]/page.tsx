import WishlistButton from "@/components/wishlist-button"
import { slugify } from "@/utils/utils"
import { notFound } from "next/navigation"
import BackButton from "../../_components/back-button"
import MoreOptionsButton from "../../_components/more-options-button"
import { ACTIVISTS_DATA } from "../data"
import ActivistReturnSummary from "./_components/activist-return-summary/activist-return-summary"
import CampaignsReturn from "./_components/campaigns-return/campaigns-return"
import Demands from "./_components/demands/demands"
import ActivistDetails from "./_components/details/activist-details"
import Portfolio from "./_components/portfolio/portfolio"
import Presentations from "./_components/presentations/presentations"

interface Props {
	params: {
		id: string
	}
}

export default function MasterDataActivistsDetailsPage({ params: { id } }: Props) {
	const formattedActivistName = slugify(id)
	const item = ACTIVISTS_DATA.find(item => slugify(item.activistName) === formattedActivistName)
	if (!item) return notFound()

	const { name, activistName } = item

	return (
		<div className="flex flex-col gap-8">
			<header className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-8">
					<BackButton href="/master-data/activists" />
					<h2 className="text-3xl">{name}</h2>
				</div>
				<div className="flex items-center gap-5">
					<MoreOptionsButton />
					<WishlistButton />
				</div>
			</header>
			<div className="grid grid-cols-2 gap-8">
				<ActivistDetails item={item} />
				<Demands />
			</div>
			<ActivistReturnSummary />
			<CampaignsReturn />
			<Portfolio activistName={activistName} />
			<Presentations />
		</div>
	)
}
