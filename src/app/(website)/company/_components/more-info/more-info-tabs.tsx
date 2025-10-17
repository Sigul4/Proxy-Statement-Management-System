export default function MoreInfoTabs({ tabs }: { tabs: string[] }) {
	return (
		<div className="flex max-h-96 min-w-[430px] flex-col gap-6 overflow-y-auto overflow-x-hidden px-6">
			{tabs.map((tab, index) => (
				<div key={index} className="w-[360px] rounded-2xl border py-5 text-center">
					{tab}
				</div>
			))}
		</div>
	)
}
