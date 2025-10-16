import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReturnAnalyticsTabs() {
	return (
		<Tabs defaultValue="marketCapAndReturn" className="w-[320px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="lengthAndReturn">Length and return</TabsTrigger>
				<TabsTrigger value="marketCapAndReturn">Market cap and return</TabsTrigger>
			</TabsList>
		</Tabs>
	)
}
