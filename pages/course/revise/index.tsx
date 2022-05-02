import CourseReivseEditor from "@components/course/CourseReviseEditor";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";

const CourseRevise = () => {
  const router = useRouter();
  const { id, idx } = router.query;

  return (
    <Container maxWidth="md">
      <Box>
        <CourseReivseEditor idx={idx} id={id} />
      </Box>
    </Container>
  );
};

export default CourseRevise;
