export default function DataRangeFilterMode() {
	return (
		<div className="flex items-center gap-3 rounded-md bg-white px-4">
			{/* <!-- Left arrow --> */}
			<svg className="h-4 w-4 text-[#3A5A66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
			</svg>
			<span>Last Year</span>
			{/* <!-- Right arrow --> */}
			<svg className="h-4 w-4 text-[#3A5A66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
			</svg>
		</div>
	)
}
