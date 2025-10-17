import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ShowAbnormalReturnSwitch() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="show-abnormal-return" defaultChecked={true} />
			<Label htmlFor="show-abnormal-return">Show abnormal return</Label>
		</div>
	)
}
