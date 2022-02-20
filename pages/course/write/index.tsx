import CourseCustomEditor from "@components/course/CourseCustomEditor";
import { Box, Container } from "@mui/material";

const CourseWrite = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <CourseCustomEditor />
      </Box>
    </Container>
  );
};

export default CourseWrite;
