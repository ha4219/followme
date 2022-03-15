import AdminLayout from "@components/admin/AdminLayout";
import AdminFaqList from "@components/admin/faq/AdminFaqList";
import Head from "next/head";

const AdminFaq = () => {
  return (
    <>
      <Head>
        <title>admin faq</title>
      </Head>
      <AdminLayout>
        <AdminFaqList />
      </AdminLayout>
    </>
  );
};

export default AdminFaq;
