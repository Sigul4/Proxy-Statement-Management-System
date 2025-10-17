import Image from "next/image"
import LinkedInColorButton from "./linkedin-color-button"
import MailButton from "./mail-button"

export default function OurCompany() {
	return (
		<section className="bg-[#274B56] bg-[url('/assets/company/our-company.png')] bg-cover bg-blend-screen">
			<div className="container relative flex min-h-[542px] flex-col py-[84px]">
				<div className="z-20 flex flex-col gap-8">
					<h2 className="text-5xl font-bold tracking-[1.44px] text-white">Our Company</h2>
					<h4 className="max-w-[823px] leading-6 tracking-[0.8px] text-white">
						{
							"DEF 14 was born from a powerful blend of passion for activism and expertise in the disciplines that shape modern shareholder activism. We set out to transform how shareholder activism is analyzed and monitored, creating robust, intuitive, and cost-effective platforms. In a fast-paced financial world, DEF 14 is your trusted partner, ensuring you stay ahead of the curve. Our platform, renowned for its superior data quality, innovative visual tools, and user-friendly design, provides the insights you need to make informed decisions and achieve strategic goals. Leading companies, financial institutions, and advisory firms trust DEF 14 for unmatched intelligence and analytics on shareholder activism."
						}
					</h4>
					<div className="flex items-center gap-4">
						<div>
							<Image
								src="/assets/company/photo-sergi-corbatera-color.png"
								width={48}
								height={48}
								className="rounded-md"
								alt="Sergi Corbatera"
							/>
						</div>
						<div>
							<p className="mt-1 text-xl font-bold leading-5 tracking-[1px] text-white">Sergi Corbatera</p>
							<p className="font-medium text-[#ffffff99]">Founder and CEO</p>
						</div>
					</div>
					<div className="flex gap-4">
						<LinkedInColorButton />
						<MailButton />
					</div>
				</div>
			</div>
		</section>
	)
}
