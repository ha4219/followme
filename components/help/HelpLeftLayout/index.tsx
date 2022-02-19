import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
// import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const PROFILE = [
  { label: "FAQ", to: "/help/faq" },
  { label: "공지사항", to: "/help/notice" },
  { label: "회사소개", to: "/help/introduce" },
  { label: "찾아오시는 길", to: "/help/course" },
  { label: "개인정보처리방침", to: "/help/privacy" },
  { label: "이용약관", to: "/help/use" },
];

const HelpLeftLayout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <Grid container>
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

export default HelpLeftLayout;
