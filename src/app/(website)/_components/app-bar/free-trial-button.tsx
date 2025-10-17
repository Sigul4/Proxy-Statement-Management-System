import Link from "next/link"

export default function FreeTrialButton() {
	return (
		<Link href="/auth/signup">
			<button className="rounded-lg bg-[#274B56] px-8 py-1.5 text-sm text-white">Free Trial</button>
		</Link>
	)
}
