import AchievementsItem from "./achievements-item"

const items = [
	{
		imageSrc: "/assets/company/leading-in-innovation.png",
		name: "Leading in Innovation",
		description:
			"We are proud to be at the forefront of technology and data innovation. Our efforts have been recognized by the prestigious Chief Investment Officer publication by ISS: CIO 2023 Industry Innovation Awards in the Data & Technology category."
	},
	{
		imageSrc: "/assets/company/empowering-client-triumphs.png",
		name: "Empowering Client Triumphs",
		description:
			"Our pioneering approach has enabled numerous organizations to masterfully navigate and respond to activist campaigns. Utilizing cutting-edge analytics and comprehensive data, our clients overcome complex challenges and emerge stronger. "
	}
]

export default function Achievements() {
	return (
		<section className="container flex flex-col gap-16 bg-[url('/assets/company/bg-lines.svg')] bg-center py-[99px]">
			{items.map((item, index) => (
				<AchievementsItem key={index} {...item} reversed={index % 2 !== 0} />
			))}
		</section>
	)
}
