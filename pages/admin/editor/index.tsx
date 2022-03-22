import AdminLayout from "@components/admin/AdminLayout";
import AdminEnbaleEditorChoices from "@components/admin/editor/AdminEnblaEditorChoices";
import Head from "next/head";

const AdminEditor = () => {
  return (
    <>
      <Head>
        <title>admin editor</title>
      </Head>
      <AdminLayout>
        <AdminEnbaleEditorChoices />
      </AdminLayout>
    </>
  );
};

export default AdminEditor;
