import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
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
    <Grid container sx={{ padding: "1rem 0" }}>
      <Grid xs={3} item>
        <ProfileLeftContainer>
          <div className="title">고객센터</div>
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
          </div>
        </ProfileLeftContainer>
      </Grid>
      <Grid xs={9} item sx={{ padding: "2rem 0" }}>
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
    display: block;

    & .helpLeftLayoutLink {
      display: block;
    }
    & .active {
      display: block;

      border: 1px solid #0068ff;
      color: #0068ff;
      border-radius: 1rem;
      margin-top: 1rem;
    }

    & .deactivate {
      border: 1px solid #b8c3d1;
      border-radius: 1rem;
      margin-top: 1rem;
      display: block;
    }
  }
`;

export default HelpLeftLayout;
