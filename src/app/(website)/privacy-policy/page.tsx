import AppBar from "../_components/app-bar/app-bar"
import Footer from "../_components/footer/footer"

export default function PrivacyPolicyPage() {
	return (
		<div className="flex h-dvh flex-col">
			<div className="container py-2.5">
				<AppBar />
				<div className="my-8 flex flex-col gap-8">
					<h1 className="text-4xl">Privacy Policy for www.networkBlog.co</h1>
					<h2 className="text-2xl">
						At www.networkBlog.co, we respect the privacy of our visitors and understand the importance of protecting their
						personal information. This Privacy Policy outlines the type of personal information we may collect from you
						and how we will use it.
					</h2>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Information we collect</h3>
						<p>
							When you visit www.networkBlog.co, we may collect certain information about your visit, including your IP
							address, browser type, operating system, referring URL, and the pages you visited. We may also collect
							personal information that you voluntarily provide to us, such as your name, email address, and phone
							number.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">How we use your information</h3>
						<p>
							We may use the information we collect from you to improve our website, to respond to your inquiries, to
							send you marketing communications, and to fulfill any other purposes for which you provide your
							information. We may also use your information to comply with legal obligations or to protect our rights or
							the rights of others.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Disclosure of your information</h3>
						<p>
							We will not disclose your personal information to third parties without your consent, except as required
							by law or to comply with legal process. We may disclose your information to service providers that help us
							operate our website or to companies that help us market our products or services.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Cookies</h3>
						<p>
							We may use cookies to collect information about your visit to our website, such as the pages you viewed,
							the links you clicked, and the time you spent on our website. Cookies are small data files that are placed
							on your device when you visit a website. You can disable cookies in your browser settings, but this may
							affect your ability to use certain features of our website.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Security</h3>
						<p>
							We take reasonable measures to protect your personal information from unauthorized access or disclosure.
							However, no security measures are foolproof, and we cannot guarantee the security of your information.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Children&apos;s privacy</h3>
						<p>
							Our website is not intended for children under the age of 13. We do not knowingly collect personal
							information from children under the age of 13.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Changes to this Privacy Policy</h3>
						<p>
							We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
							the updated policy on our website.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Contact us</h3>
						<p>If you have any questions or concerns about our Privacy Policy, please contact us at agm@networkBlog.co.</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
