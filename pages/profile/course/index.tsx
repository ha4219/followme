import CourseBoard from "@components/course/CourseBoard";
import CourseContainer from "@components/profile/CourseContainer";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import { Box, Container } from "@mui/material";

const ProfileCourse = () => {
  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <Box py={2}>
          <Box p={4} sx={{ fontWeight: "bold" }}>
            코스를 부탁해
          </Box>
          <CourseBoard />
        </Box>
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfileCourse;
