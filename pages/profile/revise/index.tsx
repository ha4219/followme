import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import ProfileReviseContainer from "@components/profile/revise/ProfileReviseContainer";
import { Box, Container } from "@mui/material";

const ProfileRevise = () => {
  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <ProfileReviseContainer />
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfileRevise;
