import ThemeProgramList from "@components/theme/ThemeProgramList";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

const Theme = () => {
  return (
    <MainContainer maxWidth="lg">
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
`;

export default Theme;
