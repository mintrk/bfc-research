import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //   console.log(request.headers);
  return NextResponse.json({ role: "admin" });
}
