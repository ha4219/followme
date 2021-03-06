import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import { Avatar, Box, Container } from "@mui/material";
import { getUserProfile } from "api/auth";
import { useState, useEffect } from "react";
import { ICourse, IPointType, IUser } from "types/apiType";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Link from "next/link";
import { API } from "@src/API";
import CourseContainer from "@components/profile/CourseContainer";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, idState } from "@store/auth";
import { useRouter } from "next/router";
import CourseTable from "@components/course/CourseTable";
import ProfilePointHistory from "@components/profile/PointHistory";
import { getMyCourseBoard, getMyLikeBoard } from "api/profile";

const ProfileHome = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>();
  const [myBoards, setMyBoards] = useState<ICourse[]>([]);
  const [likeBoards, setLikeBoards] = useState<ICourse[]>([]);
  const [pointHistory, setPointHistory] = useState<IPointType[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const loggedInId = useRecoilValue(idState);
  const [isLoading, setLoading] = useState(true);
  const [courses, setCourses] = useState<any[]>([]);

  const getUser = async () => {
    getUserProfile()
      .then((res) => {
        setUser(res.data.userData[0]);
        setLoading(false);
      })
      .catch((e) => {
        router.push("/logout");
      });
  };

  const getMyBoard = async () => {
    if (user) {
      try {
        const { data } = await API.post("/user/board", {
          id: loggedInId,
        });

        const recommend = data?.recommend.map((item) => ({ ...item, type: 0 }));
        const theme = data?.theme.map((item) => ({ ...item, type: 1 }));

        const arr = [...recommend, ...theme];

        setMyBoards(arr.slice(-3));
      } catch (e) {
        console.log("myBoard", e);
      }
    }
  };

  const getLikeBoard = async () => {
    if (user) {
      try {
        const data = await getMyLikeBoard({
          id: loggedInId,
        });
        const recommend = data?.recommend.map((item) => ({ ...item, type: 0 }));
        const theme = data?.theme.map((item) => ({ ...item, type: 1 }));

        const arr = [...recommend, ...theme];
        setLikeBoards(arr.slice(-3));
      } catch (e) {
        console.log("likeBoard", e);
      }
    }
  };

  const getCourses = async () => {
    if (user) {
      try {
        const data = await getMyCourseBoard({
          id: loggedInId,
        });

        setCourses(data.slice(-3));
      } catch (e) {
        console.log("mycourse", e);
      }
    }
  };

  // const getPointHistory = async () => {
  //   if (user) {
  //     try {
  //       const data = await getUserPointHistory(loggedInId);
  //       console.log(data);

  //       setPointHistory(data.slice(-3));
  //     } catch (e) {
  //       console.log("profile getPOintHistory", e);
  //     }
  //   }
  // };

  useEffect(() => {
    if (user) {
      getMyBoard();
      getLikeBoard();
      getCourses();
    }

    // getPointHistory();
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        {user && (
          <ProfileContainer>
            <div className="title">
              <div className="sub">
                <Avatar
                  alt="user"
                  src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${loggedInId}`}
                  className="avatar"
                />
                <div className="titleContent">
                  <div className="name">{`${user.name}???, ???????????????.`}</div>
                  <div className="email">{user.email}</div>
                </div>
              </div>
              <div className="rightContent">
                <FavoriteBorderOutlinedIcon className="like" />
                <div>{`?????????: ${user.likeCnts}???`}</div>
                <AttachMoneyOutlinedIcon className="money" />
                <div>{`?????????: ${user.point ? user.point : 0}p`}</div>
              </div>
            </div>
            <div className="myboard">
              <div className="sub">
                <div className="subTitle">??? ?????????</div>
                <Link href="/profile/board">{"????????? >"}</Link>
              </div>
              <CourseContainer courses={myBoards} like={true} />
            </div>
            <div className="myboard">
              <div className="sub">
                <div className="subTitle">??? ?????????</div>
                <Link href="/profile/like">{"????????? >"}</Link>
              </div>
              <CourseContainer courses={likeBoards} like={false} />
            </div>
            <div className="mypoint">
              <div className="sub">
                <div className="subTitle">????????? ??????</div>
                <Link href="/profile/point">{"????????? >"}</Link>
              </div>
              <Box>
                <ProfilePointHistory length={3} pagination={false} />
              </Box>
            </div>
            <div className="mycourse">
              <div className="sub">
                <div className="subTitle">????????? ?????????</div>
                <Link href="/profile/board">{"????????? >"}</Link>
              </div>
              <Box py={2}>
                <CourseTable courses={courses} />
              </Box>
            </div>
          </ProfileContainer>
        )}
      </ProfileLeftLayout>
    </Container>
  );
};

const ProfileContainer = styled.div`
  & .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid #3e3e3e;

    & .avatar {
      margin-right: 1rem;
    }

    & .sub {
      display: flex;
      align-items: center;

      & .titleContent {
        & .name {
          font-size: 1.5rem;
          font-weight: bold;
        }
        & .email {
          font-size: 0.8rem;
          color: #8f969f;
        }
      }
    }

    & .rightContent {
      display: flex;
      font-size: 0.9rem;

      & .like {
        border-radius: 1rem;
        padding: 2px;
        color: #3386ff;
        border: 2px solid #dcdce6;
        margin: 0 0.3rem;
      }
      & .money {
        border-radius: 1rem;
        padding: 2px;
        color: #3386ff;
        margin: 0 0.3rem;
        border: 2px solid #dcdce6;
      }
    }
  }

  & .myboard {
    padding: 1rem 0;
  }

  & .mypoint {
    padding: 1rem 0;
  }

  & .mycourse {
    padding: 1rem 0;
  }

  & .sub {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .subTitle {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    & a {
      font-size: 0.9rem;
    }
  }
`;

export default ProfileHome;
