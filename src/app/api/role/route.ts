import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("[role] headers : ", request.headers.get("authorization"));
  console.log("[role] headers : ", request.headers);
  return NextResponse.json({ role: "admin" });
}
