import { SectionCard } from "@/components/section-card"
import { Button } from "@/components/ui/button"
import SubscriptionPlansSection from "./_components/subscription-plans-section"

export default function SubscriptionPage() {
	return (
		<SectionCard>
			<div className="px-3 py-[6px]">
				<div className="flex w-full flex-col gap-6">
					<header className="flex w-full items-center justify-between">
						<h2 className="text-lg font-semibold">Subscription plans</h2>
						<div>
							<Button size="sm" className="h-9 px-8">
								Start 7-day free trial
							</Button>
						</div>
					</header>
					<SubscriptionPlansSection />
				</div>
			</div>
		</SectionCard>
	)
}
