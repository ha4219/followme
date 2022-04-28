import ProfilePointHistory from "@components/profile/PointHistory";
import PointHistoryBoard from "@components/profile/PointHistoryBoard";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import { Container } from "@mui/material";

const ProfilePoint = () => {
  return (
    <Container>
      <ProfileLeftLayout>
        <ProfilePointHistory pagination={true} />
      </ProfileLeftLayout>
    </Container>
  );
};

export default ProfilePoint;
