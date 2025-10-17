"use client"

import { useEffect, useState } from "react"
import Footer from "../../(website)/_components/footer/footer"

export default function PendingReviewPage() {
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")

	useEffect(() => {
		// Get name and email from local storage
		const storedName = localStorage.getItem("userName")
		const storedEmail = localStorage.getItem("userEmail")
		if (storedName) setName(storedName)
		if (storedEmail) setEmail(storedEmail)
	}, [])

	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="container flex-grow py-2.5">
				<div className="my-16 flex flex-col items-center justify-center text-center">
					<h1 className="mb-4 text-4xl font-bold text-gray-800">Thank You for Your Interest!</h1>
					<div className="max-w-2xl rounded-lg bg-white p-8 shadow-lg">
						<p className="mb-6 text-xl text-gray-600">
							Thank you for your interest, <span className="font-semibold">{name}</span>. We will process your free
							trial request within the next 12 hours.
						</p>
						<p className="mb-8 text-lg text-gray-500">
							In the meantime, if you wish to reach out to us, you can email us at:{" "}
							<a href="mailto:demo@networkBlog.co" className="font-medium text-blue-600 hover:underline">
								demo@networkBlog.co
							</a>
						</p>
						<div className="rounded-md bg-gray-50 p-4">
							<p className="text-sm text-gray-500">
								Your registered email: <span className="font-medium text-gray-700">{email}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
