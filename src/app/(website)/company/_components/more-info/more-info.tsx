import MoreInfoContent from "./more-info-content"
import MoreInfoTabs from "./more-info-tabs"

const items = [
	{
		title: "Advanced Data Analytics",
		description:
			"At the heart of DEF 14 is our innovative technology platform, designed to provide the most accurate and insightful data in the market. Our cutting-edge analytics tools offer deep dives into trends, patterns, and key metrics, all presented through stunning visuals that bring your data to life. Experience the future of shareholder activism intelligence with DEF 14's powerful and intuitive platform."
	},
	{
		title: "Visuals and User Experience",
		description: ""
	},
	{
		title: "Rapid Insight Generation",
		description: ""
	},
	{
		title: "User-Friendly Interface",
		description: ""
	},
	{
		title: "Real-Time Updates",
		description: ""
	}
]

export default function MoreInfo() {
	return (
		<section className="container flex gap-16 py-24">
			<MoreInfoTabs tabs={items.map(x => x.title)} />
			<MoreInfoContent title={items[0].title} description={items[0].description} />
		</section>
	)
}
