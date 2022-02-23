import CourseReivseEditor from "@components/course/CourseReviseEditor";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";

const CourseRevise = () => {
  const router = useRouter();
  return (
    <Container maxWidth="md">
      <Box>
        <CourseReivseEditor idx={1} />
      </Box>
    </Container>
  );
};

export default CourseRevise;
