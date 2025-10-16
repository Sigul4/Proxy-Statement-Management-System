import Image from "next/image"

interface Props {
	id: number
	name: string
	company: string
	src: string
}

export default function PresentationItem({ id, name, company, src }: Props) {
	return (
		<article className="h-auto w-32">
			<div className="flex h-40 justify-center rounded-lg border p-10">
				<Image src={src} height={52} width={52} alt={name} />
			</div>
			<footer className="flex flex-col gap-1 py-2 text-center">
				<span className="text-sm font-medium tracking-wide text-[#282937]">{name}</span>
				<span className="text-xs font-normal tracking-wide text-[#7D7D7D]">{company}</span>
			</footer>
		</article>
	)
}
