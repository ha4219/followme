import CustomEditor from "@components/CustomEditor";
import { Box, Container } from "@mui/material";

const EditorWrite = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <CustomEditor />
        {/* <TestEditor description={value} setDescription={setValue} /> */}
      </Box>
    </Container>
  );
};

export default EditorWrite;
