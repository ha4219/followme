import LeftLayout from "@components/LeftLayout";
import { Container, Grid } from "@mui/material";
import Head from "next/head";

const EditorDetail = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>hihi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid container>
        <LeftLayout />
        <Grid py={3} item xs={9}>
          hihi
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditorDetail;
