import ThemeCustomEditor from "@components/theme/ThemeCustomEditor";
import { Box, Container } from "@mui/material";

const ThemeWrite = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <ThemeCustomEditor />
      </Box>
    </Container>
  );
};

export default ThemeWrite;
