export default function MoreInfoContent({ title, description }: { title: string; description: string }) {
	return (
		<div className="flex flex-col gap-9">
			<h3 className="text-3xl">{title}</h3>
			<p>{description}</p>
		</div>
	)
}
