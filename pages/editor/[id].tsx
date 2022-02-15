import LeftLayout from "@components/LeftLayout";
import { Container, Grid } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";

const EditorDetail = ({ id }) => {
  useEffect(() => {}, []);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>hihi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LeftLayout>
        <div>hi</div>
      </LeftLayout>
    </Container>
  );
};

export default EditorDetail;
