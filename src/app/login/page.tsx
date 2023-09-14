"use client";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const [cookie, setCookie] = useState<string[]>();

  useEffect(() => {
    setCookie(document.cookie.split("="));
    // console.log("[Login] cookie : ", cookie);
    // if (cookie && cookie[0] === "BFC-X-Authen") {
    //   handleSignIn(cookie[1]);
    // }
  }, []);
  useEffect(() => {
    console.log("[Login] cookie : ", cookie);
    if (cookie && cookie[0] === "BFC-X-Authen") {
      handleSignIn(cookie[1]);
    }
  }, [cookie]);

  const handleSignIn = async (token: string) => {
    console.log("[Login] token : ", token);
    const res = await signIn("credentials", {
      token: token,
      callbackUrl: `${window.location.origin}/admin`,
    });
  };

  return <div>LoginPage</div>;
};

export default LoginPage;
