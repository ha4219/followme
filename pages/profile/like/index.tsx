import CourseContainer from "@components/profile/CourseContainer";
import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import { Box, Container, Pagination } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ICourse, ICourseDetail } from "types/apiType";
import { getMyLikeBoard } from "api/profile";
import Image from "next/image";

const PAGESIZE = [24, 36, 48];

const ProfileLike = () => {
  const [boards, setBoards] = useState<ICourse[]>([]);
  const loggedInId = useRecoilValue(idState);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const [perPageSize, setPerPageSize] = useState(24);

  const getBoard = async () => {
    // const { data } = await getUserBoard();
    // const { data } = await API.post("/user/likeList", {
    //   id: loggedInId,
    // });
    // const arr = [...data.theme, ...data.recommend];
    const data = await getMyLikeBoard({
      id: loggedInId,
    });
    const recommend = data?.recommend.map((item) => ({ ...item, type: 0 }));
    const theme = data?.theme.map((item) => ({ ...item, type: 1 }));

    const arr = [...recommend, ...theme];
    setSize(Math.ceil(arr.length / perPageSize));
    setBoards(arr);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    setSize(Math.ceil(boards.length / perPageSize));
  }, [perPageSize, boards]);

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <MainContainerWrapper maxWidth="lg">
      <Box className="editorPath">
        <div className="MainContainerPathIcon">
          <Image
            src="/icons/icon.home.png"
            width="18px"
            height="18px"
            alt="homeIcon"
          />
        </div>
        <span>
          <span className="MainContainerPathColor">홈</span>
          <span className="dividor">|</span>
          <span className="MainContainerPathColor">MyPage</span>
          <span className="dividor">|</span>
          {"내 좋아요"}
        </span>
      </Box>

      <Box className="editorTitle">{"내 좋아요"}</Box>
      <ProfileLeftLayout>
        <MainContainer>
          <HeadContainer>
            <TitleContainer>
              <div className="sub">
                {"내 좋아요"}
                <span className="orange">{boards.length}</span>개
              </div>
            </TitleContainer>
            <SortedContainer>
              <div className="editorProgramListPerPage">
                {PAGESIZE.map((item, index) => (
                  <div
                    key={index}
                    className={
                      item === perPageSize
                        ? "editorProgramListPerPageItem active"
                        : "editorProgramListPerPageItem"
                    }
                    onClick={() => setPerPageSize(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </SortedContainer>
          </HeadContainer>
          <CourseContainer
            courses={boards.slice(page * perPageSize, (page + 1) * perPageSize)}
            like={true}
          />
          <Pagination
            className="pagination"
            count={size}
            onChange={handleChangePage}
          />
        </MainContainer>
      </ProfileLeftLayout>
    </MainContainerWrapper>
  );
};

const TitleContainer = styled.div`
  margin-top: 1rem;
  font-family: paybooc-Light;
  & .sub {
    font-size: 0.8rem;
    color: #000000;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
  }

  & .orange {
    font-family: paybooc-Bold;
    margin-left: 1rem;
    color: #ff9016;
    font-weight: 300;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
`;

const SortedContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  font-family: paybooc-Bold;

  & .editorProgramListSelect {
    height: 20px;
    font-size: 0.8rem;
    border: 0;
    padding: 0;
    margin-right: 1rem;

    & div {
      border: 0;
    }
  }

  & .editorProgramListPerPage {
    display: flex;
    font-size: 0.8rem;

    & .editorProgramListPerPageItem {
      margin: 0 0.5rem;
      cursor: pointer;
    }
    & .active {
      border-bottom: 1px solid #000000;
    }
  }
`;

const MainContainerWrapper = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .MainContainerPathIcon {
    height: 21px;
    margin-right: 6px;
  }
  & .editorPath {
    margin-top: 3rem;
    display: flex;
    font-size: 0.9rem;
    font-family: paybooc-Medium;

    & .MainContainerPathColor {
      color: #888888;
    }
    & .dividor {
      padding: 1rem;
    }
  }
  & .editorTitle {
    font-family: paybooc-Bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
  }
`;

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
