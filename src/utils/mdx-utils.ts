import fs from "fs"
import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"

const MDX_ROOT_DIRECTORY = path.join(process.cwd(), "src", "app", "content")

export async function getPostBySlug(slug: string) {
	const slugWithoutExtension = slug.replace(/\.mdx$/, "")
	const filePath = path.join(MDX_ROOT_DIRECTORY, `${slugWithoutExtension}.mdx`)

	const fileContent = fs.readFileSync(filePath, {
		encoding: "utf-8"
	})

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: {
			parseFrontmatter: true
		}
	})

	return {
		meta: {
			...frontmatter,
			slug: slugWithoutExtension
		},
		content
	}
}

export async function getAllPostsMeta() {
	const fileNames = fs.readdirSync(MDX_ROOT_DIRECTORY)

	const posts = await Promise.all(
		fileNames.map(async fileName => {
			const { meta } = await getPostBySlug(fileName)
			return meta
		})
	)

	return posts
}
