import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioCompositionAnalysisTabs() {
	return (
		<Tabs defaultValue="portfolioConcentration" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="portfolioConcentration">Portfolio concentration</TabsTrigger>
				<TabsTrigger value="portfolioSectorComposition">Portfolio sector composition</TabsTrigger>
			</TabsList>
		</Tabs>
	)
}
