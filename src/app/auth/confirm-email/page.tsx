import { AppBarLogo } from "@/app/(protected)/_components/app-bar/app-bar-logo"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import NeedHelp from "../_components/need-help"
import { ConfirmEmailForm } from "./_components/confirm-email-form"

export default async function ConfirmEmailPage() {
	return (
		<>
			<div className="flex h-screen w-screen">
				<section className="z-10 flex w-full min-w-[500px] flex-col justify-between bg-white p-11 md:w-1/3">
					<header>
						<AppBarLogo />
					</header>
					<div className="flex w-full flex-col justify-between">
						<ConfirmEmailForm />
					</div>
					<footer className="flex flex-col items-center justify-center py-4 text-micro font-normal tracking-[0.4px] text-[#999]">
						<p>
							Already confirmed?{" "}
							<Link href="/auth/login" className="ml-2 text-[#1B1B1B] hover:underline hover:underline-offset-2">
								Log In
							</Link>
						</p>
						<Separator className="my-5 w-48 text-gray-300" />
						<NeedHelp />
					</footer>
				</section>
				<div className="hidden flex-1 flex-col gap-8 overflow-hidden bg-[#F5F5F5] p-24 md:flex">
					<h2 className="max-w-[500px] text-4xl font-semibold leading-normal tracking-[1.12px] text-[#274B56]">
						Confirm Your Email
						<div className="ml-3 inline-block h-1 w-10 rounded-[1px] bg-[#62AFC7] align-middle"></div>
					</h2>
					<h3 className="max-w-[420px] text-pretty text-base font-normal leading-7 tracking-[0.8px] text-[#274B56]">
						Please check your email for the confirmation code and enter it below to activate your account.
					</h3>
					<div className="relative mt-8">
						<Image
							alt="Example of a user navigating through the app"
							src="/assets/home/landing-2.png"
							className="absolute left-0 top-0"
							width={700}
							height={400}
							unoptimized
							priority
						/>
					</div>
				</div>
			</div>
		</>
	)
}
