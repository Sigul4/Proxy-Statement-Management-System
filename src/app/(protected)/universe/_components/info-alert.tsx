import Image from "next/image"

export function InfoAlert() {
	return (
		<div className="">
			<Image
				className="absolute -left-6 -top-1 h-32 w-32 object-cover"
				alt="Group"
				src="/assets/information-alert.svg"
				width={132}
				height={132}
				unoptimized
			/>
		</div>
	)
}
