import LogoutButton from "@/components/LogoutButton";
import { getRole, getRoleServer } from "@/lib/authentication/getRole";
import React from "react";

type Props = {};

const AdminPage = async (props: Props) => {
  const role = await getRole();

  return (
    <div>
      AdminPage
      <p>Role : {role && role.role}</p>
      <LogoutButton />
    </div>
  );
};

export default AdminPage;
