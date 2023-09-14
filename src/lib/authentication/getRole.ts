import axios from "axios";
import { axiosInstance } from "../axios/axiosInstance";
import { axiosInstanceClient } from "../axios/axiosInstanceClient";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getSession } from "next-auth/react";

export async function getRole() {
  try {
    // const response = await fetch("http://localhost:3000/api/role", {
    //   method: "POST",
    // });
    const response = await axiosInstanceClient.post("/api/role", {
      token: "mint",
    });
    console.log("[getRole] response : ", response.data);
    return response.data;
  } catch (error) {
    console.log("[getRole] error : ", error);
  }
  // return { role: "mint" };
}

export async function getRoleServer() {
  try {
    // const response = await fetch("http://localhost:3000/api/role", {
    //   method: "POST",
    // });
    const response = await axiosInstance.post("/api/role", {
      token: "mint",
    });
    console.log("[getRole] response : ", response.data);
    return response.data;
  } catch (error) {
    console.log("[getRole] error : ", error);
  }
  // return { role: "mint" };
}
