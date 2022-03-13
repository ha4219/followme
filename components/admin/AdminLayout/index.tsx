import styled from "@emotion/styled";
import { FC } from "react";
import AdminDrawer from "../AdminDrawer";
import AdminHeader from "../AdminHeader";

const AdminLayout: FC = ({ children }) => {
  return (
    <AdminDrawer>
      <AdminMain>
        <AdminHeader />

        {children}
      </AdminMain>
    </AdminDrawer>
  );
};

const AdminMain = styled.div`
  margin-left: 240px;
`;

export default AdminLayout;
