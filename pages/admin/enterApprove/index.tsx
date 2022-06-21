import AdminLayout from "@components/admin/AdminLayout";
import AdminEnterChoices from "@components/admin/enter/AdminEnterChoices";
import Head from "next/head";

const AdminEnter = () => {
  return (
    <>
      <Head>
        <title>admin editor</title>
      </Head>
      <AdminLayout>
        <AdminEnterChoices />
      </AdminLayout>
    </>
  );
};

export default AdminEnter;
