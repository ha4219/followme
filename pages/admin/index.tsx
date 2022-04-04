import AdminBannerList from "@components/admin/banner/AdminBannerList";
import AdminDrawer from "@components/admin/AdminDrawer";
import AdminHeader from "@components/admin/AdminHeader";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/banner");
  }, []);
  return (
    <AdminDrawer>
      <AdminMain>
        <AdminHeader />
      </AdminMain>
    </AdminDrawer>
  );
};

const AdminMain = styled.div`
  margin-left: 240px;
`;

export default Admin;
