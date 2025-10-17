import AppBar from "../_components/app-bar/app-bar"
import Footer from "../_components/footer/footer"
import AboutUs from "./_components/about-us"
import Achievements from "./_components/achievements/achievements"
import MoreInfo from "./_components/more-info/more-info"
import Objectives from "./_components/objectives/objectives"
import OurCompany from "./_components/our-company/our-company"
import ThoughtfulSolutionsInformation from "./_components/thoughtful-solutions-information"
import UniqueFeatures from "./_components/unique-features/unique-features"

export default function CompanyPage() {
	return (
		<div>
			<div className="container py-2.5">
				<AppBar />
			</div>
			<OurCompany />
			<Achievements />
			<ThoughtfulSolutionsInformation />
			<div className="flex flex-col gap-10">
				<UniqueFeatures />
				<AboutUs />
			</div>
			<Objectives />
			<MoreInfo />
			<Footer />
		</div>
	)
}
