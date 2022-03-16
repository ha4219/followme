import AdminLayout from "@components/admin/AdminLayout";
import AdminFaqWriteEditor from "@components/admin/faq/AdminFaqWriteEditor";
import Head from "next/head";

const AdminFaqWrite = () => {
  return (
    <>
      <Head>
        <title>admin faq write</title>
      </Head>
      <AdminLayout>
        <AdminFaqWriteEditor />
      </AdminLayout>
    </>
  );
};

export default AdminFaqWrite;
