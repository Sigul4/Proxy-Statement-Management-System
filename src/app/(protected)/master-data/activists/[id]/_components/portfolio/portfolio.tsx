import { SectionCard } from "@/components/section-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import PortfolioHoldings from "./portfolio-holdings"
import PortfolioQuarterOverQuarterComparison from "./portfolio-quarter-over-quarter-comparison"

interface Props {
	activistName: string
}

export default function Portfolio({ activistName }: Props) {
	return (
		<SectionCard title="Portfolio">
			<div className="flex flex-col gap-4">
				<Suspense fallback={<Skeleton className="h-[16rem] w-full rounded-xl" />}>
					<PortfolioHoldings activistName={activistName} />
				</Suspense>
				<Suspense fallback={<Skeleton className="h-[24rem] w-full rounded-xl" />}>
					<PortfolioQuarterOverQuarterComparison activistName={activistName} />
				</Suspense>
			</div>
		</SectionCard>
	)
}
