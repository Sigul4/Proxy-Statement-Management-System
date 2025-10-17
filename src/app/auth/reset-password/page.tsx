import { AppBarLogo } from "@/app/(protected)/_components/app-bar/app-bar-logo"
import Image from "next/image"
import ResetPasswordForm from "./_components/reset-password-form"

export default async function ResetPasswordPage() {
	return (
		<>
			<div className="flex h-dvh w-screen">
				<div className="z-10 col-span-5 flex w-[760px] flex-col justify-between bg-white p-11">
					<div className="flex w-full flex-col justify-between gap-32">
						<AppBarLogo />
						<ResetPasswordForm />
					</div>
				</div>
				<div className="col-span-7 flex flex-1 flex-col gap-8 bg-[#F5F5F5] p-24">
					<h2 className="text-4xl font-semibold leading-normal tracking-[1.12px] text-[#274B56]">
						Explore the Activism Landscape{" "}
						<div className="ml-1 inline-block h-1 w-10 rounded-[1px] bg-[#62AFC7] align-middle"></div>
					</h2>
					<h3 className="text-base text-[#274B56]">
						Experience an enjoyable journey through the activism landscape with access to a highly accurate and reliable
						dataset.
					</h3>
					<div className="relative mt-8">
						<Image
							alt=""
							src="/characteristics/characteristics-3.png"
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
