import ThemeProgramList from "@components/theme/ThemeProgramList";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Theme = () => {
  return (
    <MainContainer maxWidth="lg">
      <Box className="editorPath" py={1}>
        <HomeOutlinedIcon />
        <span>
          홈<span className="dividor">|</span>
          {"테마여행"}
        </span>
      </Box>

      <Box className="editorTitle">{"테마여행"}</Box>
      <Box py={2}>
        <ThemeProgramList />
      </Box>
    </MainContainer>
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

export default Theme;
