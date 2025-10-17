import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import CommonHoldings from "./_components/common-holdings/common-holdings"
import InformationPortfolio from "./_components/information-portfolio"
import PortfolioFollowerReturn from "./_components/porfolio-follower-return/portfolio-follower-return"
import PortfolioCompositionAnalysis from "./_components/portfolio-composition-analysis/portfolio-composition-analysis"
import QuarterOverQuarterComparison from "./_components/quarter-over-quarter-comparison/quarter-over-quarter-comparison"
import TopPerformingPortfolios from "./_components/top-performing-portfolios/top-performing-portfolios"

export default async function UniversePortfolioPage() {
	return (
		<div className="flex flex-col gap-8">
			<InformationPortfolio />
			<TopPerformingPortfolios />
			<PortfolioFollowerReturn />
			<PortfolioCompositionAnalysis />
			<Suspense fallback={<Skeleton className="h-[30rem] w-full rounded-xl" />}>
				<CommonHoldings />
			</Suspense>
			<QuarterOverQuarterComparison />
		</div>
	)
}
