import { options } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { getSessionData } from "../session/sessionStorage";

export const axiosInstanceClient = axios.create();

// axiosInstanceClient.interceptors.request.use(async (config) => {
//   const session = sessionStorage.getItem("session_token");

//   if (session) {
//     config.headers.Authorization = `Bearer ${session}`;
//   }

//   return config;
// });

axiosInstanceClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  // const session = getSessionData("session_token");

  // const { data: session } = useSession();
  // if (session) {
  // }
  console.log("[axiosInstanceClient] session : ", session?.tk);
  if (session) {
    config.headers.Authorization = `Bearer ${session.tk}`;
  }

  return config;
});
