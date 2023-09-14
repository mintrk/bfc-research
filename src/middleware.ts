import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log("[Middleware] pathname -> ", request.nextUrl.pathname);
    console.log("[Middleware] role -> ", request.nextauth.token?.role);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("authorization", `Bearer ${request.nextauth.token?.tk}`);
    // config.headers.Authorization = `Bearer ${session}`;

    return NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/home", "/admin", "/client", "/api/:path*"],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   console.log("[Middleware] : ", request.nextUrl.pathname);

//   let cookie = request.cookies.get("BFC-X-Authen");
//   console.log("[Middleware] cookies : ", cookie);

//   try {
//     const apiUrl = "http://localhost:3000/api/role";
//     const headers = {
//       Authorization: `Bearer ${cookie?.value}`,
//       "Content-Type": "application/json",
//     };
//     const data = await (
//       await fetch(apiUrl, {
//         method: "POST",
//         headers: headers,
//       })
//     ).json();
//     // console.log(data);
//   } catch (error) {
//     console.log("[Middleware] error : ", error);
//   }

//   if (request.nextUrl.pathname === "/admin") {
//     console.log("[Middleware] : here");
//     // NextResponse.rewrite(new URL("/admin", request.url));
//   }

//   return NextResponse.next();
// }
