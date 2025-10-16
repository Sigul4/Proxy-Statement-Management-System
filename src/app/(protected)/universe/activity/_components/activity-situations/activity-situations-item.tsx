import Image from "next/image"
import Link from "next/link"
import { ActivitySituation } from "../../types"

export default function ActivitySituationsItem({ item }: { item: ActivitySituation }) {
	const { activistName, targetCompanyName, whenFiled, form } = item

	return (
		<li className="flex items-start gap-3.5">
			<Image src="/icons/icon-notification.svg" height={16} width={16} alt="Icon notifications" priority />
			<p className="flex-auto grow text-xs font-normal tracking-[0.48px]">
				<Link href={"/master-data/activists/1"} className="font-semibold hover:underline hover:underline-offset-2">
					{activistName}
				</Link>
				<span> has filed a </span>
				<Link href={"/master-data/campaigns/1"} className="font-semibold hover:underline hover:underline-offset-2">
					{form}
				</Link>
				<span> on </span>
				<Link href={"/master-data/targets/1"} className="font-semibold hover:underline hover:underline-offset-2">
					{targetCompanyName}
				</Link>
			</p>
			<span className="w-24 text-right text-micro tracking-[0.48px] text-[#999]">{whenFiled}</span>
		</li>
	)
}
