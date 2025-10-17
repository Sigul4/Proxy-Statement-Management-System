import Link from "next/link"

export default function RequestAFreeTrialButton({ isMobile }: { isMobile?: boolean }) {
	return (
		<Link href="/auth/signup">
			<button
				className={
					isMobile
						? "w-full rounded-lg border bg-white px-3 py-4 font-medium tracking-[0.8px] text-[#274B56]"
						: "w-full text-nowrap rounded-lg border px-3 py-[5px] text-sm tracking-[0.7px]"
				}
			>
				Request a free trial
			</button>
		</Link>
	)
}
