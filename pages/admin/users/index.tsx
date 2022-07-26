import AdminLayout from "@components/admin/AdminLayout";
import UserManipluateList from "@components/admin/users/UserManipluateList";
import Head from "next/head";

const AdminUser = () => {
  return (
    <>
      <Head>
        <title>admin users</title>
      </Head>
      <AdminLayout>
        <UserManipluateList />
      </AdminLayout>
    </>
  );
};

export default AdminUser;
