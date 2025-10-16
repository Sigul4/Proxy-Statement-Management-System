import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CampaignInvestmentReturnsTabs() {
	return (
		<Tabs defaultValue="returns" className="w-[260px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="returns">Returns</TabsTrigger>
				<TabsTrigger value="fillingDayReturn">Filing day return</TabsTrigger>
			</TabsList>
		</Tabs>
	)
}
