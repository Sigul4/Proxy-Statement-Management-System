import dynamic from "next/dynamic"

const ChartjsProviders = dynamic(() => import("./chartjs-providers"), { ssr: false })

export function ProtectedProviders({ children }: { children: React.ReactNode }) {
	return <ChartjsProviders>{children}</ChartjsProviders>
}
