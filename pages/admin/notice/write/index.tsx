import AdminLayout from "@components/admin/AdminLayout";
import AdminNoticeWriteEditor from "@components/admin/notice/AdminNoticeWriteEditor";
import Head from "next/head";

const AdminNoticeWrite = () => {
  return (
    <>
      <Head>
        <title>admin notice write</title>
      </Head>
      <AdminLayout>
        <AdminNoticeWriteEditor />
      </AdminLayout>
    </>
  );
};

export default AdminNoticeWrite;
