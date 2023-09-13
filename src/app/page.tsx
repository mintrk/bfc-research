"use client";

import { getData } from "@/lib/getData";

// async function getData() {
//   return { data: "mint" };
// }

export default async function Page() {
  const data = await getData();

  return <main>{data.title}</main>;
}
