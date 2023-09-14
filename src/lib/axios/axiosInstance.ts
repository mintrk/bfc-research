import { options } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
// import { cookies } from "next/headers";
// import cookieCutter from 'cookie-cutter'
import { getServerSession } from "next-auth";
import { getSessionData } from "../session/sessionStorage";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getServerSession();

  // const sessionServer = getSessionData("session_token");
  // const sessionClient = sessionStorage.getItem("session_token");

  // const cookieStore = cookies();
  // let cookie = cookieStore.get("BFC-X-Authen");
  // const cookie = Cookies.get("BFC-X-Authen");
  // console.log("[axiosInstance] cookies : ", cookie);

  // console.log("[axiosInstance] session server : ", sessionServer);
  // console.log("[axiosInstance] session client : ", sessionClient);
  // if (sessionServer) {
  //   config.headers.Authorization = `Bearer ${sessionServer}`;
  // }
  if (session) {
    config.headers.Authorization = `Bearer ${session}`;
  }

  return config;
});
