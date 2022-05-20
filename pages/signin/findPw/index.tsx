import styled from "@emotion/styled";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import useInput from "@hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import { auth } from "@config/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { checkPhone } from "@helpers/checkReg";
import { toast } from "react-toastify";
import { phoneVerifyAndPass } from "@helpers/signUpHelper";
import { doFindPW } from "api/auth";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const FindPw = () => {
  const [id, setId, onChangeId] = useInput("");
  const [phone, setPhone, onChangePhone] = useInput("");
  const [verified, setVerified, onChangeVerified] = useInput("");
  const [password, setPassowrd, onChangePassword] = useInput("");
  const [checkPassword, setCheckPassword, onChangeCheckPassword] = useInput("");
  const [success, setSuccess] = useState(false);
  const [phoneV, setPhoneV] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await doFindPW({
        id: id,
        phoneNum: phone,
        password: password,
      });
      if (res.data === "success") {
        setSuccess(true);
      }
    } catch (e) {
      console.log("findId error", e);
    }
  };

  const initilizeCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );
  };

  const onSendSMS = useCallback(async () => {
    if (!checkPhone(phone)) {
      toast.warning("알맞은 형식의 휴대폰 번호를 입력해주세요");
      return;
    }
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regPhone.test(phone) === true) {
      const phoneVerified = phoneVerifyAndPass(phone);
      signInWithPhoneNumber(auth, phoneVerified, window.recaptchaVerifier)
        .then(function (confirmationResult) {
          // confirmationResult can resolve with the fictional testVerificationCode above.
          // return confirmationResult.confirm(testVerificationCode);
          window.confirmationResult = confirmationResult;
          toast.success("인증번호 전송성공");
        })
        .catch(function (error) {
          // Error; SMS not sent
          // ...
          console.log(error);
          toast.error("인증번호 전송실패");
        });
    } else {
      toast.error("유효하지 않은 휴대폰 번호입니다.");
    }
  }, [phone]);

  const onVerifySMS = useCallback(async () => {
    window.confirmationResult
      .confirm(verified)
      .then((res) => {
        console.log(res);
        toast.success("인증성공");
        setPhoneV(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("인증실패");
      });
  }, [verified]);

  useEffect(() => {
    initilizeCaptcha();
  }, []);

  return (
    <Container maxWidth="lg">
      {success ? (
        <MainContainer>
          <div className="gray">
            <CheckIcon
              fontSize="large"
              className="icon"
              sx={{ width: 80, height: 80 }}
            />
            <div className="title">비밀번호 변경이 완료되었습니다.</div>
          </div>
          <div className="btns">
            <Link href="/">
              <a className="main">메인으로</a>
            </Link>
            <Link href="/signin">
              <a className="login">로그인</a>
            </Link>
          </div>
        </MainContainer>
      ) : (
        <MainFixContainer>
          <Box py={5}>
            <Typography variant="h6" py={5}>
              비밀번호 찾기
            </Typography>
            <Box>
              <form onSubmit={onSubmit}>
                <div className="textFieldWrapper">
                  <TextField
                    value={id}
                    size="small"
                    onChange={onChangeId}
                    type="id"
                    placeholder="ID를 입력해주세요."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: "1rem", marginRight: "5rem" }}
                  />
                  <span />
                </div>
                <div className="textFieldWrapper">
                  <TextField
                    value={phone}
                    size="small"
                    onChange={onChangePhone}
                    placeholder="휴대폰 번호를 입력해주세요."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: "1rem", marginRight: "1rem" }}
                  />
                  <Button variant="contained" onClick={onSendSMS}>
                    전송
                  </Button>
                </div>
                <div className="textFieldWrapper">
                  <TextField
                    value={verified}
                    size="small"
                    onChange={onChangeVerified}
                    placeholder="인증번호를 입력하세요."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      marginBottom: "1rem",
                      marginRight: "1rem",
                    }}
                  />
                  <Button variant="contained" onClick={onVerifySMS}>
                    인증
                  </Button>
                </div>

                <div className="textFieldWrapper">
                  <TextField
                    value={password}
                    size="small"
                    onChange={onChangePassword}
                    type="password"
                    disabled={!phoneV}
                    placeholder="비밀번호를 입력해주세요."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: "1rem", marginRight: "5rem" }}
                  />
                </div>
                <div className="textFieldWrapper">
                  <TextField
                    value={checkPassword}
                    size="small"
                    disabled={!phoneV}
                    onChange={onChangeCheckPassword}
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ marginBottom: "1rem", marginRight: "5rem" }}
                  />
                </div>
                <div className="topMargin">
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!phoneV && password === checkPassword}
                  >
                    변경
                  </Button>
                </div>
              </form>
            </Box>
          </Box>
        </MainFixContainer>
      )}
      <div
        id="recaptcha-container"
        // data-sitekey="6LcsaxsdAAAAAEBn0sPDCEncnU9564MisyRuDzD_"
        data-callback="sendForm"
        data-size="invisible"
      ></div>
    </Container>
  );
};

const MainContainer = styled(Box)`
  text-align: center;
  margin-top: 5rem;
  & .gray {
    background-color: #f8f8fa;
    padding: 2rem;
    & .icon {
      color: #3386ff;
      border-radius: 10rem;
      border: 5px solid #3386ff;
    }
    & .title {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }

  & .content {
    padding: 1rem;
  }

  & .btns {
    margin: 6rem 0;

    color: #ffffff;
    & .main {
      padding: 1rem 2rem;
      background-color: #191919;
    }

    & .login {
      margin-left: 1.5rem;
      padding: 1rem 2rem;
      background-color: #3386ff;
    }
  }
`;

const MainFixContainer = styled(Box)`
  text-align: center;
  & .gray {
    background-color: #f8f8fa;
    padding: 2rem;
    & .icon {
      color: #3386ff;
      border-radius: 10rem;
      border: 5px solid #3386ff;
    }
    & .title {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }

  & .textFieldWrapper {
    // display: flex;
    padding: 1rem;

    & .sameHeight {
      height: 40px;
    }
  }
  & .content {
    padding: 1rem;
  }

  & .topMargin {
    margin-top: 1rem;
  }
  & .btns {
    margin: 6rem 0;

    color: #ffffff;
    & .main {
      padding: 1rem 2rem;
      background-color: #191919;
    }

    & .login {
      margin-left: 1.5rem;
      padding: 1rem 2rem;
      background-color: #3386ff;
    }
  }
`;

export default FindPw;
