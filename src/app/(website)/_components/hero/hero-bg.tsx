export default function HeroBg({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-[url('/assets/home/logo14.svg')] bg-no-repeat md:bg-[position:calc(100%-700px)_0px]">
			<div className="right-0 top-0 bg-[url('/assets/home/logo14-2.svg')] bg-no-repeat py-2.5 md:bg-[position:100%_0px]">
				{children}
			</div>
		</div>
	)
}
