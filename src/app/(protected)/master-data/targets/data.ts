import { TargetItem } from "./types"

const BASE_DATA: TargetItem[] = [
	{
		id: 1,
		countryImageSrc: "/assets/master-data/united-states.svg",
		comapanyLogoSrc: "/data-logos/apple-table-logo.png",
		ticker: "AAPL",
		companyName: "Apple Inc.",
		industry: "Technology",
		sector: "Consumer Tech",
		marketCap: "$2.5T",
		revenueGrowth: 10,
		forwardPe: 20.5,
		forwardEvEbitda: 16.8,
		priceBook: 8.3,
		ltmEvSales: 6.5,
		ltmEbidtaOperatingMargin: 29,
		fiveYearTsr: 200,
		threeYearTsr: 100,
		twoYearTsr: 60,
		oneYearTsr: 40,
		sixMonthsTsr: 20
	},
	{
		id: 2,
		countryImageSrc: "/assets/master-data/germany.svg",
		comapanyLogoSrc: "/data-logos/daimler-logo.png",
		ticker: "DAI",
		companyName: "Daimler AG",
		industry: "Automotive",
		sector: "Industrials",
		marketCap: "€80B",
		revenueGrowth: 5,
		forwardPe: 12.0,
		forwardEvEbitda: 7.5,
		priceBook: 1.2,
		ltmEvSales: 1.3,
		ltmEbidtaOperatingMargin: 15,
		fiveYearTsr: 80,
		threeYearTsr: 30,
		twoYearTsr: 25,
		oneYearTsr: 10,
		sixMonthsTsr: 5
	}
]

export const TARGET_DATA: TargetItem[] = Array.from({ length: 25 }, (_, i) =>
	BASE_DATA.map(item => ({ ...item, id: item.id + i * BASE_DATA.length }) as TargetItem)
).flat()
