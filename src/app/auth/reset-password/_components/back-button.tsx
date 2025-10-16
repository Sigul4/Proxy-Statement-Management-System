import Link from "next/link"
import Button from "../../_components/button"
import BackIcon from "./back-icon"

export default function BackButton() {
	return (
		<Button variant="outline" asChild>
			<Link href="/auth/login" passHref>
				<div className="flex items-center gap-2">
					<BackIcon />
					<span className="text-black">Back</span>
				</div>
			</Link>
		</Button>
	)
}
