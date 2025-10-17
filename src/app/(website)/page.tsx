import ExploreTheActivismLandscape from "./_components/explore-the-activism-landscape/explore-the-activism-landscape"
import Features from "./_components/features/features"
import Footer from "./_components/footer/footer"
import Hero from "./_components/hero/hero"

export default function HomePage() {
	return (
		<div>
			<Hero />
			<ExploreTheActivismLandscape />
			<Features />
			<Footer />
		</div>
	)
}
