// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });

  const { pathname } = req.nextUrl;

  const userProtectedRoutes = /^\/dashboard(\/.*)?$/;
  const adminProtectedRoutes = /^\/admin(\/.*)?$/;
  const userApiProtectedRoutes = /^\/api\/dashboard(\/.*)?$/;
  const adminApiProtectedRoutes = /^\/api\/admin(\/.*)?$/;
  const adminSignIn = "/admin/auth";

  if (
    pathname.startsWith(adminSignIn)
  ) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.next();
    }
  }  else if (userProtectedRoutes.test(pathname)) {
    if (
      token &&
      (token.role === "User") &&
      token.isVerified
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } 
  else if (userApiProtectedRoutes.test(pathname)) {
    if (
      token &&
      (token.role === "User" || token.role === "Admin") &&
      token.isVerified
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } 
  else if (adminProtectedRoutes.test(pathname)) {
    if (token && token.role === "Admin" && token.isVerified) {
      
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/admin/auth", req.url));
    }
  } else if (adminApiProtectedRoutes.test(pathname)) {
    if (token && token.role === "Admin" && token.isVerified) {
      return NextResponse.next();
    } else {
      return NextResponse.json(
        {
          status: false,
          message: "Authentication failed.",
        },
        { status: 401 }
      );
    }
  } else {
    return NextResponse.next();
  }
}
