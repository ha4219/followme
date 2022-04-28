import ThemeCustomEditorWrapper from "@components/theme/ThemeCustomEditorWrapper";
import { Box, Container } from "@mui/material";

const ThemeWrite = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <ThemeCustomEditorWrapper />
      </Box>
    </Container>
  );
};

export default ThemeWrite;
