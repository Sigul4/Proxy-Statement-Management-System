import RequirementItem from "./requirement-item"

export default function Requirements({ data }: { data: string[] }) {
	return (
		<ol>
			{data.map((item, index) => (
				<RequirementItem key={index} label={item} />
			))}
		</ol>
	)
}
