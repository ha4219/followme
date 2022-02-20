import CourseContainer from "@components/profile/CourseContainer";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import { Container, Pagination } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const ProfileLike = () => {
  const [boards, setBoards] = useState([]);
  const loggedInId = useRecoilValue(idState);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const perPage = 6;

  const getBoard = async () => {
    // const { data } = await getUserBoard();
    const { data } = await API.post("/user/likeList", {
      id: loggedInId,
    });
    setSize(Math.ceil(data.length / perPage));

    setBoards(data.reverse());
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    getBoard();
  }, []);
  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <MainContainer>
          <div className="title">내 좋아요</div>
          <CourseContainer
            courses={boards.slice(page * perPage, (page + 1) * perPage)}
            like={true}
          />
          <Pagination
            className="pagination"
            count={size}
            onChange={handleChangePage}
          />
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
  & .pagination {
    display: flex;
    justify-content: center;
  }
`;

export default ProfileLike;