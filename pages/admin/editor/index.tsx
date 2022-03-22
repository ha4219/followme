import AdminLayout from "@components/admin/AdminLayout";
import AdminEditorChoices from "@components/admin/editor/AdminEditorChoices";
import AdminEnbaleEditorChoies from "@components/admin/editor/AdminEnblaEditorChoices";
import Head from "next/head";

const AdminEditor = () => {
  return (
    <>
      <Head>
        <title>admin editor</title>
      </Head>
      <AdminLayout>
        <AdminEditorChoices />
        <AdminEnbaleEditorChoies />
      </AdminLayout>
    </>
  );
};

export default AdminEditor;
