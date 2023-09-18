import { options } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";

export const axiosInstanceClient = axios.create({
  baseURL: `http://localhost:3000`,
});

axiosInstanceClient.interceptors.request.use(async (config) => {
  // const { data: session } = useSession();
  const session = await getSession();

  console.log("[axiosInstanceClient] session : ", session);
  if (session) {
    config.headers.Authorization = `Bearer ${session.tk}`;
  } else {
    const serverSession = await getServerSession(options);
    if (serverSession) {
      config.headers.Authorization = `Bearer ${serverSession.tk}`;
    }
  }

  return config;
});
