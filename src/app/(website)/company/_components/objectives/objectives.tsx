import ObjectivesItem from "./objectives-item"

const items = [
	{
		title: "Our Mission",
		description:
			"At DEF 14, our mission is to revolutionize the way you understand and engage with shareholder activism. We provide cutting-edge analytics and intelligence that transform data into actionable insights. Whether you are defending against activist campaigns or driving them, our platform is designed to give you a competitive edge with the most advanced tools and information in the industry."
	},
	{
		title: "Our Services",
		description:
			"DEF 14 offers a comprehensive suite of services tailored to meet the unique needs of our varied client base. From in-depth data analytics to bespoke advisory services, our offerings are designed to support every aspect of shareholder activism. Our platform stands out with its intuitive interface, dynamic visualizations, and real-time updates, ensuring you always have the most current and relevant information at your fingertips."
	},
	{
		title: "Why Choose DEF 14",
		description:
			"In a rapidly evolving financial landscape, DEF 14 is your trusted partner for staying ahead of the curve. Our platform is recognized for its superior data quality, innovative visual tools, and user-friendly design. We are committed to providing our clients with the insights they need to make informed decisions and achieve their strategic goals. Join the leading companies, financial institutions, and advisory firms that trust DEF 14 to deliver unmatched intelligence and analytics on shareholder activism."
	},
	{
		title: "Client Success Stories",
		description:
			"Our clients' success is our success. DEF 14 has been instrumental in helping numerous organizations effectively manage and respond to activist campaigns. By leveraging our advanced analytics and comprehensive data, clients have navigated complex challenges and emerged stronger. Discover how DEF 14 can make a difference for your organization and take your shareholder activism strategy to the next level."
	},
	{
		title: "Innovative Technology",
		description:
			"At the heart of DEF 14 is our innovative technology platform, designed to provide the most accurate and insightful data in the market. Our cutting-edge analytics tools offer deep dives into trends, patterns, and key metrics, all presented through stunning visuals that bring your data to life. Experience the future of shareholder activism intelligence with DEF 14's powerful and intuitive platform."
	},
	{
		title: "Our Commitment",
		description:
			"DEF 14 is dedicated to excellence and innovation in shareholder activism intelligence. We continuously invest in our technology and expertise to ensure we remain at the forefront of the industry. Our commitment to quality and customer satisfaction drives us to deliver the best possible service and support, helping our clients navigate the complexities of shareholder activism with confidence and success."
	}
]

export default function Objectives() {
	return (
		<section className="relative w-full bg-[#274B56] py-20 text-white">
			<div className="container flex flex-col gap-20">
				{items.map((item, index) => (
					<ObjectivesItem key={index} {...item} reversed={index % 2 === 1} />
				))}
			</div>
			<div
				className="absolute -left-1/4 top-80 h-[1200px] w-[1200px] rounded-full"
				style={{
					background: "linear-gradient(225deg, rgba(78, 155, 180, 0.10) 0%, rgba(34, 67, 78, 0.00) 100%)"
				}}
			></div>
		</section>
	)
}
