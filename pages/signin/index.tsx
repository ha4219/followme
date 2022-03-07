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
import { auth } from "@config/firebaseConfig";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { doKakaoSignin } from "api/auth";

declare global {
  interface Window {
    naver: any;
    Kakao: any;
  }
}

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
        }
      } catch (e) {
        toast.error("로그인 실패");
      }
    },
    [id, password]
  );

  // naver
  const initNaverLogin = () => {
    console.log(window.naver);

    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVERID,
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signin`,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 44, width: 352 },
      callbackHandle: true,
    });
    naverLogin.init();
    setNaver(naverLogin);
  };

  const initKakao = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOSECRET);
  };

  // kakao
  const kakaoLogin = () => {
    // try {
    //   window.Kakao.Auth.login({
    //     success: (response) => {
    //       console.log(111, response);
    //       doKakaoSignin(response.access_token);
    //       // window.Kakao.API.request({
    //       //   url: "/v2/user/me",
    //       //   success: (response) => {
    //       //     console.log(response, "kakao suc");
    //       //   },
    //       //   fail: (err) => {
    //       //     console.log(err, "kakao err");
    //       //   },
    //       // });
    //     },
    //     fail: (err) => {
    //       console.log(err, "kakao err out");
    //     },
    //   });
    // } catch (e) {
    //   alert("현재 도입 중입니다.");
    // }
  };

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);

  useEffect(() => {
    console.log(
      naver?.getLoginStatus((status) => {
        console.log(status);
        if (status) {
          console.log(naver.user);
        }
      })
    );
  }, [naver]);

  const onClickGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential?.accessToken;
        const user = res.user;
        console.log(res, credential, token, user);
      })
      .catch((err) => {
        console.log(err);
      });

    // return auth.signInWithPopup(provider);
  };

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

  const init = async () => {
    try {
      initNaverLogin();
      initKakao();
    } catch (e) {
      console.log("init social", e);
    }
  };

  useEffect(() => {
    // console.log(naver, Kakao);
    init();
  }, []);

  const url = `https://kauth.kakao.com/oauth/authorize?client_id=51ae03197626765cf6b38489a34b9215&redirect_uri=http://3.34.24.103:3000/api/user/kakao/oauth
&response_type=code`;

  return (
    <Container maxWidth="xs" sx={{ fontFamily: "paybooc-Medium" }}>
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
              <Link href="/signup">회원가입하기</Link>
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
          <div
            id="naverIdLogin"
            // sx={{ marginTop: "1rem", backgroundColor: "#03c75a" }}
            // fullWidth
            // variant="contained"
            // size="large"
          >
            네이버 로그인
          </div>
          <Button
            onClick={kakaoLogin}
            sx={{ marginTop: "1rem", backgroundColor: "#fee500" }}
            fullWidth
            variant="contained"
            size="large"
          >
            카카오 로그인
          </Button>
          {/* <Button
            onClick={onClickFacebook}
            sx={{ marginTop: "1rem", backgroundColor: "#3a5ca9" }}
            fullWidth
            variant="contained"
            size="large"
          >
            Facebook 로그인
          </Button> */}
          <Button
            onClick={onClickGoogle}
            sx={{ marginTop: "1rem", backgroundColor: "#e74133" }}
            fullWidth
            variant="contained"
            size="large"
          >
            Google 로그인
          </Button>
          <a href={url}>kakao tesat</a>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
