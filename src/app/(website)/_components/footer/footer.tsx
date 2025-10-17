import { Logo } from "@/app/(protected)/_components/app-bar/logo"
import Link from "next/link"
import FooterLinkItem from "./footer-link-item"
import LinkedInLogo from "./linkedin-logo"
import RequestAFreeTrialButton from "./request-a-free-trial-button"
import TwitterLogo from "./twitter-logo"

const FOOTER_LINK_ITEMS = [
	{ href: "/company", text: "Company" },
	{ href: "/pricing", text: "Pricing" },
	{ href: "/blog", text: "Blog" },
	{ href: "/privacy-policy", text: "Privacy policy" },
	{ href: "/terms-and-conditions", text: "Terms and Conditions" },
	{ href: "/cookie-policy", text: "Cookie Policy" }
]

export default function Footer() {
	return (
		<footer className="bg-[#274B56]">
			<div className="md:gap- container flex flex-col justify-between gap-11 py-10 text-white md:flex-row">
				<div className="flex flex-col gap-16 py-2 md:flex-row md:gap-24">
					<Link href="/">
						<Logo className="fill-white" />
					</Link>
					<div>
						<ul className="list-none columns-2">
							{FOOTER_LINK_ITEMS.map(item => (
								<FooterLinkItem key={item.href} href={item.href} text={item.text} />
							))}
						</ul>
					</div>
				</div>
				<div className="block md:hidden">
					<RequestAFreeTrialButton isMobile />
				</div>
				<div className="flex flex-col justify-between gap-10">
					<div className="flex gap-24">
						<div className="flex w-full items-center justify-between gap-7">
							<div className="flex gap-4">
								<Link href="https://www.linkedin.com/company/networkBlog/posts" target="_blank">
									<LinkedInLogo />
								</Link>
								<Link href="https://x.com/networkBlogco" target="_blank">
									<TwitterLogo />
								</Link>
							</div>
							<hr aria-hidden className="h-8 w-[1px] border border-[#ffffff33]" />
							<div>
								<p className="max-w-36 text-sm leading-6">99 Wall St. #4014 10005 New York (NY)</p>
							</div>
						</div>
						<div className="hidden md:block">
							<RequestAFreeTrialButton />
						</div>
					</div>
					<p className="text-center text-sm text-[#ffffff80] md:text-end">©2024 DEF 14 Inc. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	)
}
