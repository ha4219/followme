import AdminLayout from "@components/admin/AdminLayout";
import AdminReportList from "@components/admin/report/AdminReportList";
import Head from "next/head";

const AdminReport = () => {
  return (
    <>
      <Head>
        <title>admin faq</title>
      </Head>
      <AdminLayout>
        <AdminReportList />
      </AdminLayout>
    </>
  );
};

export default AdminReport;
