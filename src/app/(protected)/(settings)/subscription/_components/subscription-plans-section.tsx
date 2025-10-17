import PlanCard from "./plan-card"

const subscriptionPlans = [
	{
		name: "Core",
		billingOptions: ["Monthly", "Annual"],
		price: "695",
		description: ["Universe + Focus", "Watermarks in downloads", "Ads"]
	},
	{
		name: "Enhanced",
		billingOptions: ["Annual"],
		price: "995",
		description: ["+ Master data", "No watermarks", "No ads"]
	},
	{
		name: "Enterprise",
		billingOptions: ["Annual"],
		price: null,
		description: ["Data download", "Multi-user contracts"]
	}
]

export default function SubscriptionPlansSection() {
	return (
		<div className="flex w-full justify-center gap-8">
			{subscriptionPlans.map((plan, i) => {
				return <PlanCard key={i} plan={plan} />
			})}
		</div>
	)
}
