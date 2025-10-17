import { SectionCard } from "@/components/section-card"
import PhotoSection from "./_components/photo/photo-section"
import SecuritySection from "./_components/security/security-section"

export default function ProfilePage({ children }: { children: React.ReactNode }) {
	return (
		<SectionCard>
			<div className="grid gap-12 px-3 py-[6px] xl:grid-cols-4 xl:gap-0">
				<div className="order-1 xl:order-none xl:border-r xl:pr-11">
					<PhotoSection />
				</div>
				<div className="order-3 col-span-2 xl:order-none xl:border-r xl:px-11">{children}</div>
				<div className="order-2 xl:order-none xl:pl-11">
					<SecuritySection />
				</div>
			</div>
		</SectionCard>
	)
}
