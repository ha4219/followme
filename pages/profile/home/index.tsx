import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import { Avatar, Button, Container } from "@mui/material";
import { getUserBoard, getUserProfile } from "api/auth";
import { useState, useEffect } from "react";
import gravatar from "gravatar";
import { IUser } from "types/apiType";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Link from "next/link";
import { API } from "@src/API";
import CourseContainer from "@components/profile/CourseContainer";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, idState } from "@store/auth";
import { useRouter } from "next/router";

const ProfileHome = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>();
  const [myBoards, setMyBoards] = useState([]);
  const [likeBoards, setLikeBoards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
  const loggedInId = useRecoilValue(idState);
  const [isLoading, setLoading] = useState(true);

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
        setMyBoards(data.slice(-3));
      } catch (e) {
        console.log("myBoard", e);
      }
    }
  };

  const getLikeBoard = async () => {
    if (user) {
      try {
        const { data } = await API.post("/user/likeList", {
          id: loggedInId,
        });
        setLikeBoards(data.slice(-3));
      } catch (e) {
        console.log("likeBoard", e);
      }
    }
  };

  useEffect(() => {
    getMyBoard();
    getLikeBoard();
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
                  src={gravatar.url(user.id, { s: "28px", d: "retro" })}
                  className="avatar"
                />
                <div className="titleContent">
                  <div className="name">{`${user.name}님, 안녕하세요.`}</div>
                  <div className="email">{user.email}</div>
                </div>
              </div>
              <div className="rightContent">
                <FavoriteBorderOutlinedIcon className="like" />
                <div>{`좋아요: ${user.likeCnts}개`}</div>
                <AttachMoneyOutlinedIcon className="money" />
                <div>{`포인트: ${user.points}p`}</div>
              </div>
            </div>
            <div className="myboard">
              <div className="sub">
                <div className="subTitle">내 작성글</div>
                <Link href="/profile/board">{"더보기 >"}</Link>
              </div>
              <CourseContainer courses={myBoards} like={false} />
            </div>
            <div className="myboard">
              <div className="sub">
                <div className="subTitle">내 좋아요</div>
                <Link href="/profile/like">{"더보기 >"}</Link>
              </div>
              <CourseContainer courses={likeBoards} like={true} />
            </div>
            <div className="mypoint">
              <div className="sub">
                <div className="subTitle">포인트 내역</div>
                <Link href="/profile/board">{"더보기 >"}</Link>
              </div>
            </div>
            <div className="mycourse">
              <div className="sub">
                <div className="subTitle">코스를 부탁해</div>
                <Link href="/profile/board">{"더보기 >"}</Link>
              </div>
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
