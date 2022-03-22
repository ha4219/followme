import MyCourseBoard from "@components/profile/MyCourseBoard";
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
          <MyCourseBoard />
        </Box>
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfileCourse;
