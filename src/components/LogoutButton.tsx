"use client";
import { getSessionData } from "@/lib/session/sessionStorage";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

const LogoutButton = (props: Props) => {
  const handleLogout = () => {
    // const sessionToken = getSessionData("session_token");
    sessionStorage.removeItem("session_token");
    signOut();
  };

  return (
    <button
      className="rounded-md bg-blue-500 p-2 text-white"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
