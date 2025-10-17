import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import ActivitySituations from "./_components/activity-situations/activity-situations"
import CampaignsLaunched from "./_components/campaigns-launched/campaigns-launched"
import Highlights from "./_components/highlights/highlights"
import InformationCampaignResults from "./_components/information-campaign-results"
import InformationCampaignsLaunched from "./_components/information-campaigns-launched"
import SizeAndReturnOfCampaign from "./_components/size-and-return-of-campaign/size-and-return-of-campaign"
import TopTen from "./_components/top-ten/top-ten"

export default function UniverseActivityPage() {
	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
				<Suspense fallback={<Skeleton className="h-[16rem] w-full rounded-xl" />}>
					<ActivitySituations />
				</Suspense>
				<Highlights />
			</div>
			<InformationCampaignsLaunched />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
				<Suspense fallback={<Skeleton className="h-[35rem] w-full rounded-xl" />}>
					<CampaignsLaunched />
				</Suspense>
				<Suspense fallback={<Skeleton className="h-[35rem] w-full rounded-xl" />}>
					<TopTen />
				</Suspense>
			</div>
			<InformationCampaignResults />
			<Suspense fallback={<Skeleton className="h-[50rem] w-full rounded-xl" />}>
				<SizeAndReturnOfCampaign />
			</Suspense>
		</div>
	)
}
