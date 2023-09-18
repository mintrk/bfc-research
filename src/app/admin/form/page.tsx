import { getRole, getRoleServer } from "@/lib/authentication/getRole";
import React from "react";

type Props = {};

const AdminFormPage = async (props: Props) => {
  const role = await getRoleServer();

  return (
    <div>
      AdminFormPage
      <p>{role && role.role}</p>
    </div>
  );
};

export default AdminFormPage;
