import Previous60DayTransactionsChart from "./disclosure-period-previous-60-days-chart"

export default function DisclosurePeriodPrevious60Days() {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="font-semibold">Previous 60-day transactions</h3>
			<Previous60DayTransactionsChart />
		</div>
	)
}
