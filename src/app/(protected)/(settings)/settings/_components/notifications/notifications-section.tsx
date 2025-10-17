import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import NotificationCheckbox from "./notification-checkbox"

export default function NotificationsSection() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-lg font-semibold">Notifcations</h2>
			<div className="mt-2 flex flex-col items-start gap-8">
				<div className="flex w-full items-center justify-between">
					<div className="flex items-center space-x-2">
						<Switch id="2fa" />
						<Label htmlFor="2fa" className="text-micro font-normal tracking-[0.4px] text-[#1B1B1B]">
							Email notifications
						</Label>
					</div>
				</div>
				<div className="grid w-full grid-cols-3 space-x-2">
					<NotificationCheckbox id="watchlistUpdatesChk" label="Watchlist updates" />
					<NotificationCheckbox id="weeklyReportsChk" label="Weekly reports" />
					<NotificationCheckbox id="systemMessagesChk" label="System messages" />
				</div>
			</div>
		</div>
	)
}
