import RecommendProgramList from "@components/recommend/RecommendProgramList";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

const Recommend = () => {
  return (
    <MainContainer maxWidth="lg">
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
`;

export default Recommend;
