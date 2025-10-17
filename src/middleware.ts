import { type NextRequest, NextResponse } from "next/server"
import { getUser } from "./app/api/auth/[...nextauth]/user/user.service"
import { authenticatedUser } from "./utils/amplify-server-utils"

// Routes that require authentication
const protectedRoutes = [
	"/profile/preview",
	"/settings",
	"/connections",
	"/subscription",
	"/universe",
	"/master-data",
	"/vulnerability",
	"/wishlisted"
]

// Routes that require admin access
const loginRoutes = ["/auth/login", "/auth/signup", "/auth/onboading", "/auth/reset-password", "auth/confirm-email"]

// Routes that require admin access
const adminRoutes = ["/admin/dashboard", "/admin/users", "/admin/highlights", "/admin/situations", "/admin/blog"]

// Routes that are accessible to everyone
const publicRoutes = ["/company", "/pricing", "/blog", "/privacy-policy", "/terms-and-conditions", "/cookie-policy"]

/**
 * Route guard middleware for Next.js applications.
 *
 * This middleware function checks the requested route and applies appropriate
 * access controls based on user authentication and authorization.
 *
 * Routes are grouped as follows:
 *
 * 1. Protected Routes (require authentication):
 *    - /profile
 *    - /settings
 *    - /connections
 *    - /subscription
 *    - /universe
 *    - /master-data
 *    - /vulnerability
 *    - /wishlisted
 *
 * 2. Admin Routes (require admin access):
 *    - /admin/dashboard
 *    - /admin/users
 *    - /admin/highlights
 *    - /admin/situations
 *    - /admin/blog
 *
 * 3. Public Routes (accessible to everyone):
 *    - /company
 *    - /pricing
 *    - /blog
 *    - /privacy-policy
 *    - /terms-and-conditions
 *    - /cookie-policy
 *
 * @param {NextRequest} request - The incoming request object
 * @returns {Promise<NextResponse>} The response object after applying route guards
 */
export async function middleware(request: NextRequest): Promise<NextResponse> {
	const { pathname } = request.nextUrl
	const response = NextResponse.next()

	// Authenticate user
	const user = await authenticatedUser({ request, response })
	const userProfile = user ? await getUser(`user-${user.username}`) : null

	// If user is authenticated, check their confirmation status
	if (user && userProfile) {
		const isConfirmed = userProfile?.confirmed_access || false
		// If user is not confirmed and tries to access any route other than /pending-review
		if (!isConfirmed && pathname !== "/pending-review") {
			return NextResponse.redirect(new URL("/pending-review", request.url))
		}

		// If user is confirmed and tries to access /pending-review, redirect to profile
		if (isConfirmed && pathname === "/pending-review") {
			return NextResponse.redirect(new URL("/profile/preview", request.url))
		}
	}

	if (user && !userProfile) {
		return NextResponse.redirect(new URL("/auth/onboarding", request.url))
	}

	// Check if it's a public route
	if (publicRoutes.some(route => pathname.startsWith(route))) {
		return response
	}

	if (pathname === "/") {
		return user
			? NextResponse.redirect(new URL("/profile/preview", request.url))
			: NextResponse.redirect(new URL("/public-home", request.url))
	}

	// If user is authenticated and tries to access an auth route, redirect to home
	if (user && pathname.startsWith("/auth") && !pathname.includes("/onboarding")) {
		return NextResponse.redirect(new URL("/profile/preview", request.url))
	}

	const loginRoute = loginRoutes.find(route => pathname.includes(route))

	if (!user && !loginRoute) {
		return NextResponse.redirect(new URL("/auth/login", request.url))
	}

	// If user is not authenticated and tries to access a protected route
	if (!user) {
		const routeProtectedRoute = protectedRoutes.find(route => pathname.includes(route))
		if (routeProtectedRoute) {
			return NextResponse.redirect(
				new URL("auth/login", request.url.slice(0, Number(`-${routeProtectedRoute.length}`)))
			)
		}

		const adminRoute = adminRoutes.find(route => pathname.includes(route))
		if (adminRoute) {
			return NextResponse.redirect(new URL("auth/login", request.url.slice(0, Number(`-${adminRoute.length}`))))
		}
	}

	// Check for admin routes
	if (adminRoutes.some(route => pathname.startsWith(route)) && !user?.isAdmin) {
		return NextResponse.redirect(new URL("/profile/preview", request.url))
	}

	if (pathname === "/universe") {
		return NextResponse.redirect(new URL("/universe/portfolio", request.url))
	}

	if (pathname === "/master-data") {
		return NextResponse.redirect(new URL("/master-data/campaigns", request.url))
	}

	return response
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)"
	]
}
