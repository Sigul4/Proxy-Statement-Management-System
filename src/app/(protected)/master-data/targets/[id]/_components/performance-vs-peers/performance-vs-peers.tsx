import { SectionCard } from "@/components/section-card"
import PerformanceVsPeersChart from "./performance-vs-peers-chart"
import PerformanceVsPeersTable from "./performance-vs-peers-table"

export default function PerformanceVsPeers() {
	return (
		<SectionCard title="Performance v. peers">
			<PerformanceVsPeersChart />
			<PerformanceVsPeersTable />
		</SectionCard>
	)
}
