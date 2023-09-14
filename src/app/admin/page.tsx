import { getRole, getRoleServer } from "@/lib/authentication/getRole";
import React from "react";

type Props = {};

const AdminPage = async (props: Props) => {
  const role = await getRoleServer();

  return (
    <div>
      AdminPage
      <p>{role && role.role}</p>
    </div>
  );
};

export default AdminPage;
