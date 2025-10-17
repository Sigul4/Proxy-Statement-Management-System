import { AppBarLogo } from "@/app/(protected)/_components/app-bar/app-bar-logo"
import { OnboardingForm } from "./_components/onboarding-form"

export default async function OnboardingPage() {
	return (
		<>
			<div className="flex h-screen w-screen items-center justify-center">
				<section className="z-10 mx-auto flex h-screen w-full max-w-[600px] flex-col justify-evenly bg-white p-11 pb-0">
					<header>
						<AppBarLogo />
					</header>
					<div className="flex w-full flex-col justify-between">
						<OnboardingForm />
					</div>
				</section>
			</div>
		</>
	)
}
