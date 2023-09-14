import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  return NextResponse.json({
    message: "Login successful",
    tk: "thisismytoken",
  });
}

export async function GET(request: Request) {
  return NextResponse.redirect(new URL("http://localhost:3000/admin"));
  // redirect("/admin");
}
