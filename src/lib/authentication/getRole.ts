import axios from "axios";
import { axiosInstance } from "../axios/axiosInstance";
import { axiosInstanceClient } from "../axios/axiosInstanceClient";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getSession } from "next-auth/react";

export async function getRole() {
  try {
    const response = await axiosInstanceClient.post("/api/role");
    console.log("[getRole] response : ", response.data);
    return response.data;
  } catch (error) {
    console.log("[getRole] error : ", error);
  }
}

export async function getRoleServer() {
  try {
    const response = await axiosInstance.post("/api/role");
    console.log("[getRole] response : ", response.data);
    return response.data;
  } catch (error) {
    console.log("[getRole] error : ", error);
  }
}
