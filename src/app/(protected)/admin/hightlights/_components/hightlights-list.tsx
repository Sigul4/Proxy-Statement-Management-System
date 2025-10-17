import Button from "@/app/auth/_components/button"
import { cn } from "@/lib/utils"
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"

const items = [
	{
		title: "CalPERS to vote against Exxon Board members",
		date: "Today",
		src: "/data/highlights/1.png"
	},
	{
		title: "Cevian builds stake at Baloise",
		date: "2 Days ago",
		src: "/data/highlights/2.png"
	},
	{
		title: "Musk pay challenged by activist",
		date: "4 Days ago",
		src: "/data/highlights/3.png"
	},
	{
		title: "CalPERS to vote against Exxon Board members2",
		date: "Today",
		src: "/data/highlights/1.png"
	},
	{
		title: "Cevian builds stake at Baloise2",
		date: "2 Days ago",
		src: "/data/highlights/2.png"
	},
	{
		title: "Musk pay challenged by activist2",
		date: "4 Days ago",
		src: "/data/highlights/3.png"
	}
]

export function HightlightsList() {
	return (
		<>
			<div className="relative">
				<div className="w-full overflow-x-auto pb-2">
					<table className="w-full gap-8">
						<thead className="text-[#777]">
							<th className="py-3 text-start text-megamicro font-normal">Title</th>
							<th className="text-start text-megamicro font-normal">Date</th>
							<th></th>
						</thead>
						<tbody className="text-micro font-normal tracking-wide text-[#1B1B1B]">
							{items.map((item, index) => (
								<tr key={index} className="gap-5 border-b first-of-type:border-t">
									<TableTd>
										<div className="flex flex-row items-center gap-5">
											<img className="h-[50px] w-[50px] rounded-full" src={item.src} />
											<span>{item.title}</span>
										</div>
									</TableTd>
									<TableTd>{item.date}</TableTd>
									<TableTd>
										<div className="flex items-center justify-end gap-2">
											<Button variant="outline" className="aspect-square rounded-full p-2 ">
												<Pencil1Icon />
											</Button>
											<Button variant="outline" className="aspect-square rounded-full p-2">
												<TrashIcon />
											</Button>
										</div>
									</TableTd>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex w-full justify-between py-6 text-xs">
				<p className="text-xs text-[#1B1B1B]">
					Shown <span className="font-semibold">11-20</span> items
				</p>
				<div className="flex gap-2">
					<p className="mr-2">Total 7 pages</p>
					<span className="mr-1 font-semibold">{"<<"}</span>
					<span className="mr-1 font-semibold">{"<"}</span>
					<div className="flex gap-2 text-[#999]">
						<span className="font-semibold text-[#1B1B1B]">1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
					</div>
					<span className="mr-1 font-semibold">{">"}</span>
					<span className="font-semibold">{">>"}</span>
				</div>
				<p className="flex gap-2 text-xs text-[#1B1B1B]">
					Show by:
					<ul className="flex gap-2 font-normal">
						<li className="font-semibold">10</li>
						<li className="text-[#999]">20</li>
						<li className="text-[#999]">50</li>
						<li className="text-[#999]">100</li>
					</ul>
				</p>
			</div>
		</>
	)
}

function TableTd({ className, children }: { className?: string; children: React.ReactNode }) {
	return <td className={cn("px-3 py-3", className)}>{children}</td>
}
