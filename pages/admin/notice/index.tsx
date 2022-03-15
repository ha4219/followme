import AdminLayout from "@components/admin/AdminLayout";
import AdminNoticeList from "@components/admin/notice/AdminNoticeList";
import Head from "next/head";

const AdminNotice = () => {
  return (
    <>
      <Head>
        <title>admin faq</title>
      </Head>
      <AdminLayout>
        <AdminNoticeList />
      </AdminLayout>
    </>
  );
};

export default AdminNotice;
