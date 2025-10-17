import Link from "next/link"

export default function NeedHelp() {
	return (
		<p>
			Need help?
			<Link href="/auth/register" className="ml-2 text-[#1B1B1B] hover:underline hover:underline-offset-2">
				Contact with us
			</Link>
		</p>
	)
}
