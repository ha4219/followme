import AdminLayout from "@components/admin/AdminLayout";
import AdminNoticeReviseEditor from "@components/admin/notice/AdminNoticeReviseEditor";
import Head from "next/head";

const AdminNoticeWrite = () => {
  return (
    <>
      <Head>
        <title>admin notice write</title>
      </Head>
      <AdminLayout>
        <AdminNoticeReviseEditor />
      </AdminLayout>
    </>
  );
};

export default AdminNoticeWrite;
