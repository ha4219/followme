import CourseBoard from "@components/course/CourseBoard";
import CourseLeftLayout from "@components/course/CourseLeftLayout";
import CustomEditor from "@components/CustomEditor";
import LeftLayout from "@components/LeftLayout";
import { Container, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";

const Course = () => {
  return (
    <Container maxWidth="lg">
      <CourseLeftLayout>
        <Box py={2}>
          <CourseBoard />
        </Box>
      </CourseLeftLayout>
    </Container>
  );
};

export default Course;
