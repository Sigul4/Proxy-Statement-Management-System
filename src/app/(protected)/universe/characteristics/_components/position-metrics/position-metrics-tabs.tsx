export function PositionMetricsTabs({ items }: { items: string[] }) {
	return (
		<div className="h-[30px] w-[493px]">
			<div className="left-0 top-0 h-[30px] w-[499px]">
				<div className="relative h-[30px] w-[493px] rounded-lg bg-[#f1f1f5]">
					<div className="absolute left-1 top-1 h-[22px] w-[204px] rounded-md bg-white shadow-[0px_2px_15px_#1a2d5812]">
						<div className="absolute left-[15px] top-px whitespace-nowrap text-center text-micro font-semibold leading-5 tracking-[0.40px] text-[#1b1b1b] [font-family:'Poppins-SemiBold',Helvetica]">
							Market Capitalization of targets
						</div>
					</div>
					<div className="absolute left-[225px] top-[5px] whitespace-nowrap text-center text-[10px] font-normal leading-5 tracking-[0.40px] text-[#1b1b1b] [font-family:'Poppins-Regular',Helvetica]">
						Initial size of position
					</div>
					<div className="absolute left-[371px] top-[5px] whitespace-nowrap text-center text-[10px] font-normal leading-5 tracking-[0.40px] text-[#1b1b1b] [font-family:'Poppins-Regular',Helvetica]">
						Stake at filing date
					</div>
				</div>
			</div>
		</div>
	)
}
