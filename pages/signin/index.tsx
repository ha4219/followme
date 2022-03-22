import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Container from "@mui/material/Container";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import useInput from "@hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import { API, checkToken, setToken } from "src/API";
import { authState, idState } from "@store/auth";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import styled from "@emotion/styled";

declare global {
  interface Window {
    naver: any;
    Kakao: any;
    gapi: any;
  }
}

const GOOGLE_BUTTON_ID = "google_btn";

const Signin = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useRecoilState(authState);
  const [loggedInId, setLoggedInId] = useRecoilState(idState);

  const [id, setId, onChangeId] = useInput("");
  const [password, setPassowrd, onChangePassword] = useInput("");
  const [naver, setNaver] = useState<any>();
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data } = await API.post("/user/signin", {
          id: id,
          password: password,
        });

        if (data?.success) {
          toast.success("로그인 성공");
          setLoggedIn(data.accessToken);
          setLoggedInId(id);
          setToken(data.accessToken);
          setTimeout(() => {
            setLoggedIn("");
            setLoggedInId("");
            setToken("");
            router.push("/logout");
          }, 30 * 60 * 1000); // 30 * 60 * 1000
        }
      } catch (e) {
        toast.error("로그인 실패");
      }
    },
    [id, password]
  );

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);

  // const onClickFacebook = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       console.log(res);

  //       const credential = FacebookAuthProvider.credentialFromResult(res);
  //       const token = credential.accessToken;
  //       const user = res.user;
  //       console.log(res, credential, token, user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const kakaoUrl = "https://followme1.vercel.app/signin/kakao";
  const kakao_url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAOSECRET}&redirect_uri=${kakaoUrl}&response_type=code`;

  const naverUrl = "https://followme1.vercel.app/signin/naver";
  const naver_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVERID}&redirect_uri=${naverUrl}&state=code`;

  const googleUrl = "https://followme1.vercel.app/signin/google";
  const google_url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLEID}&scope=https://www.googleapis.com/auth/userinfo.profile&redirect_uri=${googleUrl}&response_type=code`;

  return (
    <Container maxWidth="xs" sx={{ fontFamily: "paybooc-Medium" }}>
      <meta
        name="google-signin-client_id"
        content={process.env.NEXT_PUBLIC_GOOGLEID}
      />
      <Box py={5}>
        <Typography variant="h6" py={5}>
          로그인
        </Typography>
        <Box>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                fullWidth
                value={id}
                onChange={onChangeId}
                placeholder="아이디를 입력해주세요."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ marginBottom: "1rem" }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8f969f",
                fontSize: "0.8rem",
              }}
            >
              <Link href="/find">아이디 / 비밀번호 찾기</Link>
              <Link href="/signup/before">회원가입하기</Link>
            </Box>

            <Button type="submit" fullWidth variant="contained" size="large">
              로그인
            </Button>
          </form>
        </Box>
        <Box py={6}>
          <Box
            sx={{ color: "#8f969f", fontSize: "0.8rem", textAlign: "center" }}
          >
            SNS 계정으로 로그인
          </Box>
          <ShareLoginContainer>
            <a href={naver_url} className="naver">
              네이버 로그인
            </a>
            <a href={kakao_url} className="kakao">
              카카오 로그인
            </a>
            <a href={google_url} className="google">
              GOOGLE 로그인
            </a>
          </ShareLoginContainer>
          {/* <div id={GOOGLE_BUTTON_ID} className="google">
            google 로그인
          </div> */}
          {/* <div id="g-signin2" data-onsuccess="onSignIn"></div> */}
        </Box>
      </Box>
    </Container>
  );
};

const ShareLoginContainer = styled.div`
  & a {
    display: block;
    width: 100%;
    text-align: center;
    background-color: red;
    padding: 0.5rem;
    margin: 0.7rem 0;
  }
  & .kakao {
    background-color: #fee500;
  }

  & .naver {
    background-color: #03c75a;
    color: #ffffff;
  }

  & .google {
    background-color: #e74133;
    color: #ffffff;
  }
`;

export default Signin;
