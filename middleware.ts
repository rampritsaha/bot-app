import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Allow requests to public routes or Next.js API routes
    if (
      pathname.startsWith("/public") || // Public routes
      pathname.startsWith("/api") || // API routes
      pathname === "/login" || // Login page
      pathname === "/signup" // Signup page
    ) {
      return NextResponse.next();
    }

    // If the route is protected and there's no token, redirect to login
    const token = req.nextauth.token;
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url); // Preserve the original URL
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login", // Your login page
    },
  }
);

// Middleware matcher to apply only to certain routes
export const config = {
  matcher: [
    "/protected/:path*", // Protect all routes under /protected
    "/dashboard/:path*", // Protect /dashboard routes
  ],
};
