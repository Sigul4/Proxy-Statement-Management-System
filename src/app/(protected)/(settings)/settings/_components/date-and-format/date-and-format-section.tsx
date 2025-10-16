import DateAndTimeFormatSelect from "./date-and-time-format-select"
import TimeZoneSelect from "./time-zone-select"

export default function DateAndFormatSection() {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-lg font-semibold">Date and format</h2>
			<div className="grid w-full grid-cols-2 gap-8">
				<TimeZoneSelect />
				<DateAndTimeFormatSelect />
			</div>
		</div>
	)
}
