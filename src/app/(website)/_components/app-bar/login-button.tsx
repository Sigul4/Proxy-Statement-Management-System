import Link from "next/link"
import IconLogin from "./icon-login"

export default function LoginButton() {
	return (
		<Link href="/auth/login">
			<button className="flex h-[32px] w-[40px] items-center justify-center rounded-lg border border-[#274B56] py-1.5 text-[#274B56]">
				<IconLogin />
			</button>
		</Link>
	)
}
