import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { leftOpen } from "@store/tag";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { useRecoilState } from "recoil";

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
  const [show, setShow] = useRecoilState(leftOpen);
  // const [show, setShow] = useState(false);

  const onChangeShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Grid container py={5}>
      <Grid item xs={12} sm={12} md={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <ProfileLeftContainer>
          <BoxContainer onClick={onChangeShow}>
            <Typography
              py={1}
              sx={{ fontFamily: "paybooc-Bold", fontSize: "1.5rem" }}
            >
              {"고객센터"}
            </Typography>
            <span>{show ? "-" : "+"}</span>
          </BoxContainer>
          {show && (
            <div className="btns">
              {PROFILE.map((item, index) => (
                <div key={index}>
                  <Link href={item.to} passHref>
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
          )}
        </ProfileLeftContainer>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
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
    font-family: paybooc-Light;
    display: block;

    & .helpLeftLayoutLink {
      display: block;
    }
    & .active {
      display: block;

      color: #0068ff;
      border-radius: 1rem;
      margin-top: 1rem;
    }

    & .deactivate {
      border-radius: 1rem;
      margin-top: 1rem;
      display: block;
    }
  }
`;

const BoxContainer = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;

  & span {
    font-size: 1.3rem;
  }
`;

export default HelpLeftLayout;
