import CourseContainer from "@components/profile/CourseContainer";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { API } from "@src/API";
import { useEffect, useState } from "react";

const ProfileLike = () => {
  const [boards, setBoards] = useState([]);

  const getBoard = async () => {
    // const { data } = await getUserBoard();
    const { data } = await API.get("/main/travelBoards", {});

    setBoards(data.reverse());
  };

  useEffect(() => {
    getBoard();
  }, []);
  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <MainContainer>
          <div className="title">내 좋아요</div>
          <CourseContainer courses={boards} like={true} />
        </MainContainer>
      </ProfileLeftLayout>
    </Container>
  );
};

const MainContainer = styled.div`
  padding: 1rem 0;
  & .title {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export default ProfileLike;
