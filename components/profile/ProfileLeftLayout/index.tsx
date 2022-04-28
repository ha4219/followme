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
import { idState } from "@store/auth";
import { leftOpen } from "@store/tag";
import { getUserProfileById } from "api/auth";
import Link from "next/link";
// import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState, useCallback } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import SearchIcon from "@mui/icons-material/Search";
import { COURSETAGS } from "@data/CourseData";
import LeftLayoutTag from "@components/LeftLayoutTag";

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
      <Grid xs={12} sm={12} md={3} item sx={{ fontFamily: "paybooc-Medium" }}>
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
              {"MyPage"}
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
            {type === 1 &&
              ENTER.map((item, index) => (
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
        </ProfileLeftContainer>
      </Grid>
      <Grid xs={12} sm={12} md={9} item pl={isSmall ? "0" : "50px"}>
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
      width: 260px;
      display: flex;
      justify-content: space-between;
      color: #0068ff;
      border-radius: 1rem;
    }

    & .deactivate {
      width: 260px;
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

export default ProfileLeftLayout;
