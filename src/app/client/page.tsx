"use client";
import { getRole } from "@/lib/authentication/getRole";
import { getSession, useSession } from "next-auth/react";
import React, { use, useEffect, useState } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { axiosInstanceClient } from "@/lib/axios/axiosInstanceClient";
import axios from "axios";
import { getSessionData, setSessionData } from "@/lib/session/sessionStorage";

type Props = {};

const ClientPage = (props: Props) => {
  // const session = use(getSession());

  // useEffect(() => {
  //   console.log("[Client] session : ", session?.tk);
  // }, [session]);
  const { data: session } = useSession();
  const [res, setRes] = useState("");

  useEffect(() => {
    try {
      // axios
      //   .get("https://fakestoreapi.com/products/1")
      //   .then((response) => {
      //     setRes(response.data);
      //   })
      //   .catch((err) => console.log(err));

      // setSessionData("session_token", session?.tk);
      sessionStorage.setItem("session_token", session?.tk || "");
      fetchRole();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const role = use(getRole());

  const [role, setRole] = useState("");

  const fetchRole = async () => {
    try {
      const role = await getRole();
      setRole(role.role);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("[Client] role : ", role);
  }, [role]);

  return (
    <div>
      ClientPage
      <p>Role : {role ? role : "can't get role"}</p>
    </div>
  );
};

export default ClientPage;
