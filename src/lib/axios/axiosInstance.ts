import { options } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
// import { cookies } from "next/headers";
// import cookieCutter from 'cookie-cutter'
import { getServerSession } from "next-auth";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getServerSession(options);
  // const cookieStore = cookies();
  // let cookie = cookieStore.get("BFC-X-Authen");
  // const cookie = Cookies.get("BFC-X-Authen");
  // console.log("[axiosInstance] cookies : ", cookie);

  console.log("[axiosInstance] session : ", session);
  if (session) {
    config.headers.Authorization = `Bearer ${session.tk}`;
  }

  return config;
});
