import BackgroundRectangle from "./_components/background-rectangle"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-dvh bg-[#F0F7FA]">
			<BackgroundRectangle />
			{children}
		</div>
	)
}
