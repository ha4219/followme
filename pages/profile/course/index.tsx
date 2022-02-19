import CourseContainer from "@components/profile/CourseContainer";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import { Box, Container } from "@mui/material";

const ProfileCourse = () => {
  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <Box>내가 작성한 코스를 부탁해</Box>
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfileCourse;
