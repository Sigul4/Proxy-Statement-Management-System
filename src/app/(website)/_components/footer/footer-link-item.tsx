import Link from "next/link"

export default function FooterLinkItem({ href, text }: { href: string; text: string }) {
	return (
		<li className="mb-5">
			<Link href={href}>
				<span className="underline-offset-4 hover:underline">{text}</span>
			</Link>
		</li>
	)
}
