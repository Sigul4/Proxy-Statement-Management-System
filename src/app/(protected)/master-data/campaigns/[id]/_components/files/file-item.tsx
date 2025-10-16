import Image from "next/image"

interface Props {
	id: number
	name: string
	date: string
	src: string
}

export default function FileItem({ id, name, date, src }: Props) {
	return (
		<article className="h-40 w-32">
			<div className="flex justify-center rounded-lg border p-10">
				<Image src="/assets/pdf.svg" height={52} width={52} alt={name} />
			</div>
			<footer className="py-2 text-center">
				{name}.{"pdf"}
			</footer>
		</article>
	)
}
