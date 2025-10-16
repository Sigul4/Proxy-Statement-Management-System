import { getOverQuarterOverQuarterComparisonData } from "@/app/(protected)/_components/data-visualizations/quarter-over-quarter-comparison/actions"
import QuarterOverQuarterComparisonDataTable from "@/app/(protected)/_components/data-visualizations/quarter-over-quarter-comparison/quarter-over-quarter-comparison-data-table"
import QuarterOverQuarterComparisonSearchButton from "@/app/(protected)/_components/data-visualizations/quarter-over-quarter-comparison/quarter-over-quarter-comparison-search-button"
import QuarterOverQuarterComparisonToolbar from "@/app/(protected)/_components/data-visualizations/quarter-over-quarter-comparison/quarter-over-quarter-comparison-toolbar"

export default async function QuarterOverQuarterComparison() {
	const data = await getOverQuarterOverQuarterComparisonData()

	return (
		<section className="flex w-full grow flex-col gap-6 rounded-xl border border-solid border-gray-100 bg-white px-6 py-7 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
			<header className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full justify-between gap-5">
					<div className="flex items-center gap-6 text-zinc-900">
						<p className="text-lg font-semibold tracking-wider">Quarter over Quarter comparison</p>
						<QuarterOverQuarterComparisonSearchButton />
					</div>
				</div>
				<QuarterOverQuarterComparisonToolbar />
			</header>
			<div className="w-full">
				<QuarterOverQuarterComparisonDataTable data={data} />
			</div>
		</section>
	)
}
