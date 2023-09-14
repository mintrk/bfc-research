import axios from "axios";
import { axiosInstance } from "../axios/axiosInstance";
import { axiosInstanceClient } from "../axios/axiosInstanceClient";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getSession } from "next-auth/react";

export async function getRole() {
  try {
    // const response = await axios.post("http://localhost:3000/api/role", {
    //   token: "mint",
    // });
    // console.log("[getRole] response : ", response.data);
    // return response.data;
    const response = await fetch("http://localhost:3000/api/role", {
      method: "POST",
    });
    console.log("[getRole] response : ", response.json());
    // return response.json;
  } catch (error) {
    console.log("[getRole] error : ", error);
  }
}

export async function getRoleServer() {
  try {
    // const response = await fetch("http://localhost:3000/api/role", {
    //   method: "POST",
    // });
    const response = await axios.post("http://localhost:3000/api/role", {
      token: "mint",
    });
    console.log("[getRole] response : ", response.data);
    return response.data;
  } catch (error) {
    console.log("[getRole] error : ", error);
  }
  // return { role: "mint" };
}
