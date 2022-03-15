import AdminLayout from "@components/admin/AdminLayout";
import AdminNoticeWriteEditor from "@components/admin/notice/AdminNoticeWriteEditor";
import Head from "next/head";

const AdminFaqWrite = () => {
  return (
    <>
      <Head>
        <title>admin faq write</title>
      </Head>
      <AdminLayout>
        <AdminNoticeWriteEditor />
      </AdminLayout>
    </>
  );
};

export default AdminFaqWrite;
