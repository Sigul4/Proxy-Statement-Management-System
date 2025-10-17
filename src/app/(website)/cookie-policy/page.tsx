import AppBar from "../_components/app-bar/app-bar"
import Footer from "../_components/footer/footer"

export default function CookiePolicyPage() {
	return (
		<div className="flex h-dvh flex-col">
			<div className="container py-2.5">
				<AppBar />
				<div className="my-8 flex flex-col gap-8">
					<h1 className="text-4xl">Cookie Policy for www.networkBlog.co</h1>
					<h2 className="text-2xl">
						This Cookie Policy explains how www.networkBlog.co (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses
						cookies and similar technologies to collect information about your use of our website.
					</h2>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">What are cookies?</h3>
						<p>
							Cookies are small data files that are placed on your device when you visit a website. Cookies allow a
							website to recognize your device and remember your preferences and actions. Cookies may also collect
							information about your device and your use of the website.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">What types of cookies do we use?</h3>
						<p>We use the following types of cookies on our website:</p>
						<ul>
							<li>
								Essential cookies: These cookies are necessary for our website to function properly and cannot be
								switched off in our systems. They are usually only set in response to actions made by you, such as
								setting your privacy preferences, logging in, or filling in forms.
							</li>
							<li>
								Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and
								to see how visitors move around our website when they are using it. This helps us to improve the way our
								website works, for example, by ensuring that users are finding what they are looking for easily.
							</li>
							<li>
								Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and
								to see how visitors move around our website when they are using it. This helps us to improve the way our
								website works, for example, by ensuring that users are finding what they are looking for easily.
							</li>
							<li>
								Targeting cookies: These cookies may be set through our website by our advertising partners. They may be
								used by those companies to build a profile of your interests and show you relevant advertisements on
								other sites.
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">How do you manage cookies?</h3>
						<p>
							Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies
							or to delete certain cookies. However, if you block or delete cookies, some features of our website may
							not function properly.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Updates to this Cookie Policy</h3>
						<p>
							We may update this Cookie Policy from time to time. We will notify you of any material changes by posting
							the updated policy on our website.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Contact us</h3>
						<p>If you have any questions or concerns about our Cookie Policy, please contact us at agm@networkBlog.co.</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
