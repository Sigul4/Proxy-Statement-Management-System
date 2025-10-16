import { batchWrite, create, get, list, remove, update } from "../dynamodb.service"

const tableName = "blog"

function generateUniqueId() {
	const timestamp = Date.now().toString(16)

	const randomPart = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1)

	return `${timestamp.slice(0, 8)}-${randomPart()}-${randomPart()}-${randomPart()}-${randomPart()}${randomPart().slice(0, 4)}`
}

export interface BlogPost {
	id: string
	title: string
	excerpt: string
	firstPublishedDate: string
	lastPublishedDate: string
	url: { base: string; path: string }
	slug: string
	featured: boolean
	pinned: boolean
	categoryIds: never[]
	status: string
	publishedAt: string
	updatedAt: string
	coverMedia: {
		enabled: boolean
		image: {
			id: string
			url: string
			height: number
			width: number
			filename: string
		}
		displayed: boolean
		custom: boolean
	}
	memberId: string
	hashtags: never[]
	commentingEnabled: boolean
	minutesToRead: number
	tagIds: never[]
	relatedPostIds: never[]
	pricingPlanIds: never[]
	language: string
	seoData: {
		tags: Array<{
			type: string
			props: {
				name: string
				content: string
			}
			children: string
			custom: boolean
			disabled: boolean
		}>
		settings: {
			preventAutoRedirect: boolean
			keywords: Array<{
				term: string
				isMain: boolean
			}>
		}
	}
	content: {
		blocks: any[]
		entityMap: Record<string, any>
		documentStyle: Record<string, any>
		VERSION: string
		ID: string
	}
	contactId: string
	contentId: string
	mostRecentContributorId: string
	media: {
		wixMedia: {
			image: {
				id: string
				url: string
				height: number
				width: number
				filename: string
			}
		}
		displayed: boolean
		custom: boolean
	}
	translations: any[]
	customExcerpt: boolean
	internalId: string
	internalCategoryIds: never[]
	internalRelatedPostIds: never[]
	isLiked: boolean
	isSubscribed: boolean
	owner: {
		activityStatus: string
		contactId: string
		id: string
		image: {
			id: string
			url: string
			height: number
			width: number
		}
		name: string
		privacyStatus: string
		siteMemberId: string
		slug: string
		status: string
		isBlocked: boolean
		isOwner: boolean
		appStore: Record<
			string,
			{
				permissions: {
					role: string
				}
			}
		>
	}
	// preview: boolean
	// link: string
	viewCount: number
	commentCount: number
	likeCount: number
}

export async function createBlogPost(blogPost: Omit<BlogPost, "id">) {
	const id = generateUniqueId()
	const now = new Date().toISOString()
	const newBlogPost: BlogPost = {
		...blogPost,
		id,
		firstPublishedDate: now,
		lastPublishedDate: now,
		status: "draft"
	}
	return await create(tableName, newBlogPost)
}

export async function getBlogPost(id: string) {
	return (await get(tableName, id)) as BlogPost | null
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>) {
	return (await update(tableName, id, updates)) as BlogPost
}

export async function deleteBlogPost(id: string) {
	return await remove(tableName, id)
}

export async function listBlogPosts() {
	return (await list(tableName)) as BlogPost[]
}

export async function publishBlogPost(id: string) {
	const now = new Date().toISOString()
	return await updateBlogPost(id, {
		status: "published",
		publishedAt: now,
		updatedAt: now
	})
}

export async function archiveBlogPost(id: string) {
	const now = new Date().toISOString()
	return await updateBlogPost(id, {
		status: "archived",
		updatedAt: now
	})
}

export async function incrementViewCount(id: string) {
	const blogPost = await getBlogPost(id)
	if (blogPost) {
		return await updateBlogPost(id, {
			viewCount: blogPost.viewCount + 1,
			updatedAt: new Date().toISOString()
		})
	}
	return null
}

export async function addComment(id: string) {
	const blogPost = await getBlogPost(id)
	if (blogPost) {
		return await updateBlogPost(id, {
			commentCount: blogPost.commentCount + 1,
			updatedAt: new Date().toISOString()
		})
	}
	return null
}

export async function addLike(id: string) {
	const blogPost = await getBlogPost(id)
	if (blogPost) {
		return await updateBlogPost(id, {
			likeCount: blogPost.likeCount + 1,
			updatedAt: new Date().toISOString()
		})
	}
	return null
}

export async function getBlogPostBySlug(slug: string) {
	const allPosts = await listBlogPosts()
	return allPosts.find(post => post.slug === slug) || null
}

export async function batchCreateBlogPosts(blogPosts: any[]) {
	const now = new Date().toISOString()
	const newBlogPosts: BlogPost[] = blogPosts.map(blogPost => ({
		...blogPost,
		id: generateUniqueId(),
		firstPublishedDate: now,
		lastPublishedDate: now,
		status: "draft",
		viewCount: 0,
		commentCount: 0,
		likeCount: 0
	}))

	const batchSize = 25
	const batches = []

	for (let i = 0; i < newBlogPosts.length; i += batchSize) {
		const batch = newBlogPosts.slice(i, i + batchSize)
		batches.push(batchWrite(tableName, batch))
	}

	try {
		await Promise.all(batches)
		console.log(`Successfully wrote ${newBlogPosts.length} blog posts to DynamoDB`)
		return newBlogPosts
	} catch (error) {
		console.error("Error writing blog posts to DynamoDB:", error)
		throw error
	}
}

// export async function searchBlogPosts(query: string) {
// 	const allPosts = await listBlogPosts()
// 	return allPosts.filter(
// 		post =>
// 			post.title.toLowerCase().includes(query.toLowerCase()) ||
// 			post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
// 			(typeof post.content === 'string' ? post.content.toLowerCase().includes(query.toLowerCase()) : false) ||
// 			post.seoData.settings.keywords.some(keyword => keyword.term.toLowerCase().includes(query.toLowerCase())))
// }
