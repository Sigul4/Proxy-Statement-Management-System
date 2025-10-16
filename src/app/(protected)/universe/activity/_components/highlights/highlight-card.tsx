import Image from "next/image"

interface Props {
	title: string
	date: string
	src: string
}

export default function HighlightCard({ title, date, src }: Props) {
	return (
		<article className="relative h-[152px] flex-col rounded-sm border">
			<Image
				loading="lazy"
				src={src}
				className="inset-0 size-full rounded-sm object-cover"
				unoptimized
				alt={title}
				width={100}
				height={100}
			/>
			<footer className="absolute bottom-0 left-0 right-0 flex h-[75px] flex-col justify-start gap-2 rounded-b-sm bg-neutral-200 bg-opacity-80 py-2 pl-2 pr-2 backdrop-blur-[2px]">
				<h3 className="two-line-truncate text-micro font-bold tracking-wide text-gray-800">{title}</h3>
				<p className="text-micro tracking-wide text-gray-600">{date}</p>
			</footer>
		</article>
	)
}
