import styled from "@emotion/styled";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { leftOpen } from "@store/tag";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LeftLayoutTag from "@components/LeftLayoutTag";
import { COURSETAGS } from "@data/CourseData";

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
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState("");
  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onKeyDownValue = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setValue("");
      }
    },
    [value]
  );

  const onSubmitValue = useCallback(
    (e) => {
      setValue("");
    },
    [value]
  );

  return (
    <Grid container py={5}>
      <Grid item xs={12} sm={12} md={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <ProfileLeftContainer
          minWidth={isSmall ? "100%" : "260px"}
          maxWidth={isSmall ? "100%" : "260px"}
        >
          <Box py={2}>
            <TextField
              fullWidth
              value={value}
              onChange={onChangeValue}
              onKeyDown={onKeyDownValue}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={onSubmitValue}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box py={2}>
            {COURSETAGS.map((tag, index) => (
              <LeftLayoutTag key={index} tag={tag} />
            ))}
          </Box>
          <BoxContainer>
            <Typography
              mt={3}
              py={1}
              sx={{ fontFamily: "paybooc-Bold", fontSize: "1.5rem" }}
            >
              {"고객센터"}
            </Typography>
          </BoxContainer>
          <div className="btns">
            {PROFILE.map((item, index) => (
              <BoxContainer key={index}>
                <Link href={item.to} passHref>
                  <Button
                    key={index}
                    className={
                      router.pathname === item.to ? "active" : "deactivate"
                    }
                  >
                    <span className="btnLeft">{item.label}</span>
                    <span className="btnRight">
                      {router.pathname === item.to ? "-" : "+"}
                    </span>
                  </Button>
                </Link>
              </BoxContainer>
            ))}
          </div>
          <BoxContainer />
        </ProfileLeftContainer>
      </Grid>
      <Grid item xs={12} sm={12} md={9} pl={isSmall ? "0" : "50px"}>
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
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: #0068ff;
      border-radius: 1rem;
    }

    & .deactivate {
      width: 100%;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
    }

    & .btnLeft {
      display: block;
    }

    & .btnRight {
      display: block;
    }
  }
`;

const BoxContainer = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d8d8d8;
  padding: 14px 0 15px 0;
`;

export default HelpLeftLayout;
