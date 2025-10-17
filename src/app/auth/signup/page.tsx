import { AppBarLogo } from "@/app/(protected)/_components/app-bar/app-bar-logo"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import NeedHelp from "../_components/need-help"
import { SignUpForm } from "./_components/signup-form"

export default async function SignUpPage() {
	// const session = await auth()
	// if (session) {
	// 	return <p>You are signed in</p>
	// }

	return (
		<>
			<div className="flex h-dvh w-screen">
				<div className="z-10 col-span-5 flex w-[760px] flex-col justify-between bg-white p-11">
					<div className="flex w-full flex-col justify-between gap-32">
						<AppBarLogo />
						<SignUpForm />
					</div>
					<footer className="flex flex-col items-center justify-center text-micro font-normal tracking-[0.4px] text-[#999]">
						<p>
							Already have an account?{" "}
							<Link href="/auth/login" className="ml-2 text-[#1B1B1B] hover:underline hover:underline-offset-2">
								Log In
							</Link>
						</p>
						<Separator className="my-5 w-48 text-gray-300" />
						<NeedHelp />
					</footer>
				</div>
				<div className="col-span-7 flex flex-1 flex-col gap-8 bg-[#F5F5F5] p-24">
					<h2 className="text-4xl font-semibold leading-normal tracking-[1.12px] text-[#274B56]">
						Transparent and Comprehensive Assessments{" "}
						<div className="ml-1 inline-block h-1 w-10 rounded-[1px] bg-[#62AFC7] align-middle"></div>
					</h2>
					<h3 className="text-base text-[#274B56]">
						Switch effortlessly between contextual insights, detailed analysis, and profile deep dives with a single
						click.
					</h3>
					<div className="relative mt-8">
						<Image
							alt=""
							src="/characteristics/characteristics-2.png"
							width={1200}
							height={600}
							unoptimized
							className="absolute top-0"
						/>
					</div>
				</div>
			</div>
		</>
	)
}
