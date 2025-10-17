import { getPostBySlug } from "@/utils/mdx-utils"
import AppBar from "../../_components/app-bar/app-bar"
import Footer from "../../_components/footer/footer"

async function getPageContent(slug: string) {
	const { meta, content } = await getPostBySlug(slug)
	return { meta, content }
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
	const { meta } = await getPageContent(slug)
	return { title: "DEF 14 - " + meta.slug }
}

export default async function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
	const { content } = await getPageContent(slug)

	return (
		<div className="flex h-dvh flex-col">
			<div className="container py-2.5">
				<AppBar />
			</div>
			<div className="prose mx-auto w-full max-w-6xl flex-1 pl-0 pr-0">
				{content}
				{/* <BlogDetailSplash content={blogPost.content + blogPost.content2} />
				<div className="container py-16">
					<h1 className="text-4xl font-bold">Saba Capital Management’s April Campaign</h1>
					<p className="mt-4 text-lg">{blogPost.content}</p>
					<p className="mt-4 text-lg">{blogPost.content2}</p>
					<RecentPosts />
				</div> */}
			</div>
			<Footer />
		</div>
	)
}
