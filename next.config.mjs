import nextMDX from "@next/mdx"

const withMDX = nextMDX({
	extensions: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/universe",
				destination: "/universe/activity",
				permanent: false
			},
			{
				source: "/master-data",
				destination: "/master-data/campaigns",
				permanent: false
			},
			{
				source: "/wishlisted",
				destination: "/wishlisted/activists",
				permanent: false
			},
			{
				source: "/admin",
				destination: "/admin/dashboard",
				permanent: false
			}
		]
	},
	images: {
		remotePatterns: [
			{
				hostname: "cdn.builder.io"
			}
		]
	}
}

export default withMDX(nextConfig)
