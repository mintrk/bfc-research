"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const LoginPage = (props: Props) => {
  const [cookie, setCookie] = useState<string[]>();
  const { data: session } = useSession();
  const { push } = useRouter();

  // if already login (have session) goto another page
  if (session) {
    console.log("[Login] already have session");
    push("/client");
  }

  useEffect(() => {
    setCookie(document.cookie.split("="));
    // console.log("[Login] cookie : ", cookie);
    // if (cookie && cookie[0] === "BFC-X-Authen") {
    //   handleSignIn(cookie[1]);
    // }
  }, []);
  useEffect(() => {
    // console.log("[Login] cookie : ", cookie);
    if (cookie && cookie[0] === "BFC-X-Authen" && !session) {
      console.log("[Login] have cookie");
      handleSignIn(cookie[1]);
    }
  }, [cookie]);

  const handleSignIn = async (token: string) => {
    // console.log("[Login] token : ", token);
    // console.log("[Login] session : ", session?.tk);
    console.log("[Login] calling login with token");
    if (!session) {
      const res = await signIn("credentials", {
        token: token,
        callbackUrl: `${window.location.origin}/client`,
      });
    }
  };

  return <div>LoginPage</div>;
};

export default LoginPage;
