import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { getUserProfile } from "api/auth";
// import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const PROFILE = [
  { label: "홈", to: "/profile/home" },
  { label: "내 작성글", to: "/profile/board" },
  { label: "내 좋아요", to: "/profile/like" },
  { label: "코스를 부탁해", to: "/profile/course" },
  { label: "포인트내역", to: "/profile/point" },
  { label: "내 정보 수정", to: "/profile/revise" },
  { label: "회원탈퇴", to: "/profile/out" },
];

const ProfileLeftLayout: FC = ({ children }) => {
  const router = useRouter();
  const getUser = async () => {
    getUserProfile()
      .then((res) => {
        // setUser(res.data.userData[0]);
        // setLoading(false);
      })
      .catch((e) => {
        router.push("/logout");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Grid container py={5}>
      <Grid xs={3} item>
        <ProfileLeftContainer>
          <div className="title">MyPage</div>
          <div className="btns">
            {PROFILE.map((item, index) => (
              <div key={index}>
                <Button
                  key={index}
                  href={item.to}
                  className={
                    router.pathname === item.to ? "active" : "deactivate"
                  }
                >
                  #{item.label}
                </Button>
              </div>
            ))}
          </div>
        </ProfileLeftContainer>
      </Grid>
      <Grid xs={9} item>
        {children}
      </Grid>
    </Grid>
  );
};

const ProfileLeftContainer = styled(Box)`
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
    }

    & .deactivate {
      border: 1px solid #b8c3d1;
      border-radius: 1rem;
      margin-top: 1rem;
    }
  }
`;

export default ProfileLeftLayout;
