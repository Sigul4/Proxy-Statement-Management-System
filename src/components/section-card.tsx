export function SectionCard({
	id,
	title,
	children,
	toolbar,
	leftToolbar
}: {
	id?: string
	title?: string
	children?: React.ReactNode
	toolbar?: React.ReactNode
	leftToolbar?: React.ReactNode
}) {
	return (
		<section
			id={id}
			className="flex w-full grow flex-col gap-6 rounded-xl border border-solid border-gray-100 bg-white p-6 shadow-sm max-md:mt-9 max-md:max-w-full max-md:flex-wrap max-md:px-5"
		>
			<header className="flex w-full flex-col items-start justify-between gap-6 text-neutral-400 max-md:max-w-full max-md:flex-wrap">
				<div className="flex w-full items-center justify-between gap-5">
					<div className="flex gap-6 self-stretch text-zinc-900">
						{title && <h2 className="text-lg font-semibold tracking-wider">{title}</h2>}
						{leftToolbar && leftToolbar}
					</div>
					{toolbar && <div>{toolbar}</div>}
				</div>
			</header>
			<div className="w-full">{children}</div>
		</section>
	)
}
