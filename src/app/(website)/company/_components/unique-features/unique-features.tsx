import UniqueFeaturesItem from "./unique-features-item"

const items = [
	{
		title: "Instant Insights with Shareable Visuals",
		description: "Transform your heavy analysis needs into instant insights with compelling, shareable visuals."
	},
	{
		title: "Seamless Navigation for In-Depth Analysis",
		description:
			"Effortlessly transition from guided views to detailed analysis pages for deep dives into activist strategies."
	},
	{
		title: "Comprehensive Metric Contextualization",
		description:
			"Gain a thorough understanding of every measurable metric, contextualized for enhanced clarity and decision-making."
	},
	{
		title: "One-Click Detailed Snapshots",
		description: "Quickly shift from high-level trends to detailed profile snapshots with just one click."
	},
	{
		title: "Consistent and Comparable Analytical Visuals",
		description:
			"Maintain consistency with uniform charts and filters, enabling clear market analysis across individual funds or groups."
	},
	{
		title: "In-Depth Activist and Campaign Focus",
		description:
			"Delve deeply into activists, companies, and campaigns with detailed, double-click analysis capabilities."
	}
]

export default function UniqueFeatures() {
	return (
		<section className="relative py-20">
			<div className="container">
				<h2 className="mb-16 text-center text-[32px] font-bold leading-[48px] tracking-[1.6px] text-[#274B56]">
					Unique Features
				</h2>
				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					{items.map((item, index) => (
						<UniqueFeaturesItem key={index} {...item} />
					))}
				</div>
				<div
					className="absolute inset-0 top-40 -z-10 h-[490px] w-[1650px] -rotate-12 blur-0"
					style={{
						background: "linear-gradient(103deg, rgba(228, 240, 246, 0.40) 13.4%, rgba(227, 240, 245, 0.00) 87.67%)"
					}}
				></div>
			</div>
		</section>
	)
}
