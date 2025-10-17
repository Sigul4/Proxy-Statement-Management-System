import { Chart } from "chart.js/auto"
import clsx from "clsx"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ConfigureAmplifyClientSide from "./amplify-cognito-config"

import "./globals.css"

export const metadata: Metadata = {
	metadataBase: new URL("https://dev.d2jksw3z66cjmr.amplifyapp.com"),
	title: "Next-level shareholder activism insights | DEF 14",
	description:
		"At DEF 14, our mission is to revolutionize the way you understand and engage with shareholder activism. We provide cutting-edge analytics and intelligence that transform data into actionable insights. Whether you are defending against activist campaigns or driving them, our platform is designed to give you a competitive edge with the most advanced tools and information in the industry.",
	keywords: ["DEF 14", "data", "beautiful", "activists", "def14", "def14.org"],
	manifest: "/manifest.webmanifest",
	twitter: {
		card: "summary_large_image",
		site: "@def14",
		creator: "@def14",
		title: "Next-level shareholder activism insights | DEF 14",
		description:
			"At DEF 14, our mission is to revolutionize the way you understand and engage with shareholder activism. We provide cutting-edge analytics and intelligence that transform data into actionable insights. Whether you are defending against activist campaigns or driving them, our platform is designed to give you a competitive edge with the most advanced tools and information in the industry.",
		images: "/logos/logo-white-on-dark-large.svg"
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://dev.d2jksw3z66cjmr.amplifyapp.com",
		title: "Next-level shareholder activism insights | DEF 14",
		description:
			"At DEF 14, our mission is to revolutionize the way you understand and engage with shareholder activism. We provide cutting-edge analytics and intelligence that transform data into actionable insights. Whether you are defending against activist campaigns or driving them, our platform is designed to give you a competitive edge with the most advanced tools and information in the industry.",
		images: "/logos/logo-white-on-dark-large.svg"
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true
		}
	},
	appleWebApp: {
		startupImage: "/logos/logo-white-on-dark-square.svg"
	}
}

const poppins = Poppins({
	subsets: ["latin"],
	style: ["italic", "normal"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins"
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	Chart.defaults.font.family = poppins.className

	return (
		<html lang="en" className="overflow-x-hidden">
			<body className={clsx(poppins.className, "h-dvh w-dvw overflow-x-hidden")}>
				<>
					<ConfigureAmplifyClientSide />
					{children}
				</>
			</body>
		</html>
	)
}
