import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  // const { token } = await request.json();
  // console.log("[API] token :", token);
  // console.log("[API] url :", request.url);
  // if (token == "mint") {
  //   // redirect("/admin");

  // }
  const body = await request.formData();
  const token = body.get("token")?.toString();
  console.log("token : ", token);

  // const seralized = serialize("BFC-X-Authen", token || "no-token-yet", {
  //   httpOnly: true,
  //   maxAge: 60 * 60,
  // });

  const response = NextResponse.redirect(new URL("/login", request.url), {
    status: 302,
  });

  if (token) {
    response.cookies.set({
      name: "BFC-X-Authen",
      value: token,
      httpOnly: false,
      maxAge: 60 * 60,
    });
  }
  // if (token) {
  //   console.log("YES");
  //   setCookie("Client-BFC-X-Authen", token, {
  //     maxAge: 60 * 60,
  //   });
  // }
  return response;
  // const response = NextResponse.redirect(new URL('/home', req.url));
  // response.cookies.set({
  //     name: 'BFC-X-Authen',
  //     value: body.token,
  //     httpOnly: true,
  //     maxAge: 60 * 60,
  // })
  // return response
  // return NextResponse.json({ message: "hello" });
}

export async function GET(request: Request) {
  return NextResponse.redirect(new URL("http://localhost:3000/admin"));
  // redirect("/admin");
}
