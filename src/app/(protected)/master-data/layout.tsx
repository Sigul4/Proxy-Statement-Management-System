export default function MasterDataLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className="flex flex-col">{children}</div>
}
