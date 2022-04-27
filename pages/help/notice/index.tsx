import HelpLeftLayout from "@components/help/HelpLeftLayout";
import HelpNoticeList from "@components/help/NoticeList";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const HelpNotice = () => {
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
          {"공지사항"}
        </span>
      </Box>

      <Box className="editorTitle">{"공지사항"}</Box>
      <HelpLeftLayout>
        <HelpNoticeList />
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

export default HelpNotice;
