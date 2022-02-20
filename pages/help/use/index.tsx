import HelpLeftLayout from "@components/help/HelpLeftLayout";
import styled from "@emotion/styled";
import { Container, Paper } from "@mui/material";

const HelpUse = () => {
  return (
    <Container maxWidth="lg">
      <HelpLeftLayout>
        <MainContainer>네이버 예시입니다.</MainContainer>
      </HelpLeftLayout>
    </Container>
  );
};

const MainContainer = styled(Paper)`
  margin: 3rem 0;
`;

export default HelpUse;
