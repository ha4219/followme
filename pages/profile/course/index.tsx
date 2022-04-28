import MyCourseBoard from "@components/profile/MyCourseBoard";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const ProfileCourse = () => {
  return (
    <MainContainerWrapper maxWidth="lg">
      <Box className="editorPath">
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
          <span className="MainContainerPathColor">MyPage</span>
          <span className="dividor">|</span>
          {"코스를 부탁해"}
        </span>
      </Box>

      <Box className="editorTitle">{"코스를 부탁해"}</Box>
      <ProfileLeftLayout>
        <MyCourseBoard />
      </ProfileLeftLayout>
    </MainContainerWrapper>
  );
};

const TitleContainer = styled.div`
  margin-top: 1rem;
  font-family: paybooc-Light;
  & .sub {
    font-size: 0.8rem;
    color: #000000;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
  }

  & .orange {
    font-family: paybooc-Bold;
    margin-left: 1rem;
    color: #ff9016;
    font-weight: 300;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
`;

const SortedContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  font-family: paybooc-Bold;

  & .editorProgramListSelect {
    height: 20px;
    font-size: 0.8rem;
    border: 0;
    padding: 0;
    margin-right: 1rem;

    & div {
      border: 0;
    }
  }

  & .editorProgramListPerPage {
    display: flex;
    font-size: 0.8rem;

    & .editorProgramListPerPageItem {
      margin: 0 0.5rem;
      cursor: pointer;
    }
    & .active {
      border-bottom: 1px solid #000000;
    }
  }
`;

const MainContainerWrapper = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .MainContainerPathIcon {
    height: 21px;
    margin-right: 6px;
  }
  & .editorPath {
    margin-top: 3rem;
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

const MainContainer = styled.div`
  padding: 1rem 0;
  & .title {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  & .pagination {
    display: flex;
    justify-content: center;
  }
`;

export default ProfileCourse;
