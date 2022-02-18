import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import { Button, Container } from "@mui/material";
import { getUser } from "api/auth";

const ProfileHome = () => {
  const onClick = async () => {
    console.log(getUser());
  };

  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <Button onClick={onClick}>1</Button>
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfileHome;
