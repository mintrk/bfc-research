import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("[Middleware] : ", request.nextUrl.pathname);

  let cookie = request.cookies.get("BFC-X-Authen");
  console.log("[Middleware] cookies : ", cookie);

  try {
    const apiUrl = "http://localhost:3000/api/role";
    const headers = {
      Authorization: `Bearer ${cookie?.value}`,
      "Content-Type": "application/json",
    };
    const data = await (
      await fetch(apiUrl, {
        method: "POST",
        headers: headers,
      })
    ).json();
    // console.log(data);
  } catch (error) {
    console.log("[Middleware] error : ", error);
  }

  if (request.nextUrl.pathname === "/admin") {
    console.log("[Middleware] : here");
    // NextResponse.rewrite(new URL("/admin", request.url));
  }

  return NextResponse.next();
}
