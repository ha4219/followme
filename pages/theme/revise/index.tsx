import ThemeUpdateEditorWrapper from "@components/theme/ThemeUpdateEditorWrapper";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";

const ThemeRevise = () => {
  const router = useRouter();
  const { idx, id } = router.query;
  return (
    <Container maxWidth="md">
      <Box>
        <ThemeUpdateEditorWrapper />
      </Box>
    </Container>
  );
};

export default ThemeRevise;
