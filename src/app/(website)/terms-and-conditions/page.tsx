import AppBar from "../_components/app-bar/app-bar"
import Footer from "../_components/footer/footer"

export default function TermsAndConditionsPage() {
	return (
		<div className="flex h-dvh flex-col">
			<div className="container py-2.5">
				<AppBar />
				<div className="my-8 flex flex-col gap-8">
					<h1 className="text-4xl">Terms and Conditions for www.networkBlog.co</h1>
					<h2 className="text-2xl">
						Welcome to www.networkBlog.co! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our
						website. By using our website, you agree to be bound by these Terms. If you do not agree to these Terms,
						please do not use our website.
					</h2>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Use of website</h3>
						<p>
							You may use our website for lawful purposes only. You may not use our website to transmit or post any
							material that is defamatory, obscene, or otherwise violates any applicable law or regulation.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Intellectual property</h3>
						<p>
							All content on our website, including text, graphics, logos, images, and software, is the property of
							www.networkBlog.co or its licensors and is protected by copyright, trademark, and other intellectual property
							laws. You may not reproduce, distribute, or modify any content on our website without our prior written
							consent.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Disclaimer of warranties</h3>
						<p>
							Our website is provided &quot;as is&quot; and without warranty of any kind, express or implied, including,
							but not limited to, the implied warranties of merchantability and fitness for a particular purpose. We do
							not warrant that our website will be uninterrupted or error-free, or that any defects will be corrected.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Limitation of liability</h3>
						<p>
							We will not be liable for any damages, including, but not limited to, direct, indirect, incidental,
							punitive, or consequential damages arising from or in connection with your use of our website.
							Indemnification You agree to indemnify and hold us harmless from any claims, damages, or expenses arising
							from your use of our website or your breach of these Terms. Modification of Terms We may modify these
							Terms at any time by posting the updated Terms on our website. Your continued use of our website after the
							posting of the updated Terms constitutes your acceptance of the updated Terms.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-xl font-semibold">Governing law</h3>
						<p>
							These Terms and your use of our website will be governed by and construed in accordance with the laws of
							the state of New York, without giving effect to any principles of conflicts of law.
							<br />
							Entire agreement These Terms constitute the entire agreement between you and www.networkBlog.co with respect to
							your use of our website.
							<br />
							Contact us If you have any questions or concerns about these Terms, please contact us at agm@networkBlog.co.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
