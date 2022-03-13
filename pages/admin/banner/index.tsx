import AdminBannerList from "@components/admin/banner/AdminBannerList";
import AdminDrawer from "@components/admin/AdminDrawer";
import AdminHeader from "@components/admin/AdminHeader";
import styled from "@emotion/styled";

const AdminBanner = () => {
  return (
    <AdminDrawer>
      <AdminMain>
        <AdminHeader />
        <AdminBannerList />
      </AdminMain>
    </AdminDrawer>
  );
};

const AdminMain = styled.div`
  margin-left: 240px;
`;

export default AdminBanner;
