import ProfileEnterpriseDetail from "@components/profile/EnterpriseDetail";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import { Container } from "@mui/material";

const ProfileEnterprise = () => {
  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <ProfileEnterpriseDetail />
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfileEnterprise;
