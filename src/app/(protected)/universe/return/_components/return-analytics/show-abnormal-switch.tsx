import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ShowAbnormalSwitch() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="show-abnormal" defaultChecked={true} />
			<Label htmlFor="show-abnormal">Show abnormal</Label>
		</div>
	)
}
