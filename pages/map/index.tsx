import MapContainerNoDivWrapper from "@components/map/MapContainerNoDivWrapper";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import styled from "@emotion/styled";

const Map = () => {
  return (
    <>
      <Head>
        <title>내 주변 갈만한 곳</title>
      </Head>
      <MainContainer>
        <Box className="editorPath" py={1}>
          <HomeOutlinedIcon />
          <span>
            홈<span className="dividor">|</span>
            {"내 주변 갈만한 곳"}
          </span>
        </Box>
        <Box className="editorTitle">{"내 주변 갈만한 곳"}</Box>

        <MapContainerNoDivWrapper />
      </MainContainer>
    </>
  );
};

const MainContainer = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .editorPath {
    display: flex;

    & .dividor {
      padding: 1rem;
    }
  }
  & .editorTitle {
    font-family: paybooc-Bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
  }
`;

export default Map;
