import styled from "@emotion/styled";
import { Box, Divider, Button, Grid } from "@mui/material";
import { idState } from "@store/auth";
import { getUserProfileById } from "api/auth";
import Link from "next/link";
// import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const PROFILE = [
  { label: "홈", to: "/profile/home" },
  { label: "내 작성글", to: "/profile/board" },
  { label: "내 좋아요", to: "/profile/like" },
  { label: "코스를 부탁해", to: "/profile/course" },
  { label: "포인트내역", to: "/profile/point" },
  { label: "내 정보 수정", to: "/profile/revise" },
  { label: "회원탈퇴", to: "/profile/out" },
];

const ENTER = [{ label: "기업", to: "/profile/enterprise" }];

const ProfileLeftLayout: FC = ({ children }) => {
  const router = useRouter();
  const id = useRecoilValue(idState);
  const [type, setType] = useState(0);
  const getUser = async () => {
    try {
      const data = await getUserProfileById({
        id: id,
      });

      setType(data.userData[0].type);
    } catch (e) {
      router.push("/logout");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Grid container py={5}>
      <Grid xs={12} sm={12} md={3} item>
        <ProfileLeftContainer>
          <div className="title">MyPage</div>
          <div className="btns">
            {PROFILE.map((item, index) => (
              <div key={index}>
                <Link href={item.to}>
                  <Button
                    key={index}
                    className={
                      router.pathname === item.to ? "active" : "deactivate"
                    }
                  >
                    #{item.label}
                  </Button>
                </Link>
              </div>
            ))}
            {type !== 0 &&
              ENTER.map((item, index) => (
                <div key={index}>
                  <Link href={item.to}>
                    <Button
                      key={index}
                      className={
                        router.pathname === item.to ? "active" : "deactivate"
                      }
                    >
                      #{item.label}
                    </Button>
                  </Link>
                </div>
              ))}
          </div>
        </ProfileLeftContainer>
      </Grid>
      <Grid xs={12} sm={12} md={9} item>
        {children}
      </Grid>
    </Grid>
  );
};

const ProfileLeftContainer = styled(Box)`
  margin-bottom: 1rem;
  & .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & .btns {
    font-size: 0.8rem;

    & .active {
      border: 1px solid #0068ff;
      color: #0068ff;
      border-radius: 1rem;
      margin-top: 1rem;
      display: block;
    }

    & .deactivate {
      display: block;

      border: 1px solid #b8c3d1;
      border-radius: 1rem;
      margin-top: 1rem;
    }
  }
`;

export default ProfileLeftLayout;
