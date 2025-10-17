import { SectionCard } from "@/components/section-card"
import DateAndFormatSection from "./_components/date-and-format/date-and-format-section"
import NotificationsSection from "./_components/notifications/notifications-section"

export default function SettingsPage() {
	return (
		<SectionCard>
			<div className="grid gap-12 px-3 py-[6px] xl:grid-cols-2 xl:gap-0">
				<div className="xl:border-r xl:pr-11">
					<DateAndFormatSection />
				</div>
				<div className="xl:px-11">
					<NotificationsSection />
				</div>
			</div>
		</SectionCard>
	)
}
