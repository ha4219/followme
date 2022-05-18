import AdminLayout from "@components/admin/AdminLayout";
import AdminFaqReviseEditor from "@components/admin/faq/AdminFaqReviseEditor";
import Head from "next/head";

const AdminFaqWrite = () => {
  return (
    <>
      <Head>
        <title>admin faq write</title>
      </Head>
      <AdminLayout>
        <AdminFaqReviseEditor />
      </AdminLayout>
    </>
  );
};

export default AdminFaqWrite;
