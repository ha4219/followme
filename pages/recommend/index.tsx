import RecommendProgramList from "@components/recommend/RecommendProgramList";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Recommend = () => {
  return (
    <MainContainer maxWidth="lg">
      <Box className="editorPath" py={1}>
        <img
          src="icons/icon.home.png"
          alt="homeIcon"
          className="MainContainerPathIcon"
        />
        <span>
          <span className="MainContainerPathColor">홈</span>
          <span className="dividor">|</span>
          {"Ulife 추천코스"}
        </span>
      </Box>

      <Box className="editorTitle">{"Ulife 추천코스"}</Box>
      <Box py={2}>
        <RecommendProgramList />
      </Box>
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

export default Recommend;
