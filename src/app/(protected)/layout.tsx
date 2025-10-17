import { AppBar } from "./_components/app-bar/app-bar"
import { ProtectedProviders } from "./_components/providers/protected-providers"

export default function ProtectedLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="h-dvh w-dvw">
			<ProtectedProviders>
				<AppBar />
				<div className="mx-auto max-w-[1300px] px-11 py-8">
					<main>{children}</main>
				</div>
			</ProtectedProviders>
		</div>
	)
}
