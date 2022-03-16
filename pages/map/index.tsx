import MapContainerNoDivWrapper from "@components/map/MapContainerNoDivWrapper";
import { Container } from "@mui/material";
import Head from "next/head";

const Map = () => {
  return (
    <>
      <Head>
        <title>Followme Map</title>
      </Head>
      <Container>
        <MapContainerNoDivWrapper />
      </Container>
    </>
  );
};

export default Map;
