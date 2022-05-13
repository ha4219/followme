import HelpLeftLayout from "@components/help/HelpLeftLayout";
import { use } from "@data/use";
import styled from "@emotion/styled";
import { Box, Container, Paper } from "@mui/material";
import Image from "next/image";

const HelpUse = () => {
  return (
    <MainContainer maxWidth="lg">
      <Box className="editorPath" py={1}>
        <div className="MainContainerPathIcon">
          <Image
            src="/icons/icon.home.png"
            width="18px"
            height="18px"
            alt="homeIcon"
          />
        </div>
        <span>
          <span className="MainContainerPathColor">홈</span>
          <span className="dividor">|</span>
          {"이용약관"}
        </span>
      </Box>

      <Box className="editorTitle">{"이용약관"}</Box>
      <HelpLeftLayout>
        <MainBContainer>{use}</MainBContainer>
      </HelpLeftLayout>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .MainContainerPathIcon {
    height: 21px;
    margin-right: 6px;
  }
  & .editorPath {
    display: flex;
    font-size: 0.9rem;
    font-family: paybooc-Medium;

    & .MainContainerPathColor {
      color: #888888;
    }
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

const MainBContainer = styled(Paper)`
  margin: 3rem 0;
  padding: 1rem;
  white-space: pre-wrap;
  overflow: auto;
  height: 800px;
  font-family: paybooc-Medium;
  border: 1px solid black;
`;

export default HelpUse;
