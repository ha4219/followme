import SignupTextField from "@components/SignupTextField";
import { phoneVerifyAndPass } from "@helpers/signUpHelper";
import useInput from "@hooks/useInput";
import { Box, Button, Container, Typography } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { auth } from "@config/firebaseConfig";

const ProfileReviseContainer = () => {
  const router = useRouter();

  const [user, setUser] = useState();

  const userId = useRecoilValue(idState);
  const [name, setName, onChangeName] = useInput("");
  const [id, setId, onChangeId] = useInput("");
  const [nickName, setNickName, onChangeNickName] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [passwordCh, setPasswordCh, onChangePasswordCh] = useInput("");
  const [email, setEmail, onChangeEmail] = useInput("");
  const [phone, setPhone, onChangePhone] = useInput("");
  const [verified, setVerified, onChangeVerified] = useInput("");

  const getUser = async () => {
    API.post("/user/profile", {
      id: userId,
    })
      .then((response) => {
        setUser(response.data.userData[0]);
        setNickName(response.data.userData[0].nickName);
        setName(response.data.userData[0].name);
        setEmail(response.data.userData[0].email);
        setPhone(response.data.userData[0].phoneNum);
      })
      .catch((e) => {
        console.log(e);
        router.push("/logout");
      });
  };

  const onSendSMS = useCallback(async () => {
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

  const onVerifySMS = useCallback(async () => {
    window.confirmationResult
      .confirm(verified)
      .then((res) => {
        console.log(res);
        toast.success("인증성공");
        // setPhoneV(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("인증실패");
      });
  }, [verified]);

  const onNickNameDuplication = useCallback(async () => {
    API.post("/user/checkNickName", {
      nickName: nickName,
    })
      .then((res) => {
        if (res.data.checkingNickname === "allow") {
          // setEmailV(true);
          toast.success("사용 가능한 닉네임입니다.");
        } else {
          toast.error("사용 불가능한 닉네임입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("email check error");
      });
  }, [nickName]);

  const onEmailDuplication = useCallback(async () => {
    API.post("/user/checkEmail", {
      email: email,
    })
      .then((res) => {
        if (res.data.checkingEmail === "allow") {
          // setEmailV(true);
          toast.success("사용 가능한 이메일입니다.");
        } else {
          toast.error("사용 불가능한 이메일입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("nickname check error");
      });
  }, [email]);

  const onSubmit = (e) => {
    e.preventDefault();
    toast.info("작업중입니다.");
  };

  useEffect(() => {
    initilizeCaptcha();

    getUser();
  }, []);

  return (
    <Container maxWidth="md">
      <Box py={2}>
        <form onSubmit={onSubmit}>
          <Typography variant="h6" color="initial" pl={2} pb={3}>
            내 정보 수정
          </Typography>
          <SignupTextField
            id="name"
            label="이름"
            value={name}
            onChange={onChangeName}
            placeholder="홍길동"
            btnLabel=""
            btnActive={true}
          />
          <SignupTextField
            id="nickName"
            label="닉네임"
            value={nickName}
            onChange={onChangeNickName}
            placeholder="홍길동"
            btnLabel="중복확인"
            btnActive={true}
            onClickBtn={onNickNameDuplication}
          />
          <SignupTextField
            id="id"
            label="아이디"
            value={userId}
            onChange={onChangeId}
            btnActive={true}
            placeholder=""
          />
          <SignupTextField
            id="password"
            type="password"
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요."
            helperText="(8~16자/영문과 숫자, 특수문자 2가지 이상을 조합하여 입력해주세요)"
          />
          <SignupTextField
            id="passwordCh"
            type="password"
            label="비밀번호 확인"
            value={passwordCh}
            onChange={onChangePasswordCh}
            placeholder="비밀번호 확인"
            helperText="(다시 한 번 비밀번호를 입력해주세요)"
          />
          <SignupTextField
            id="email"
            type="email"
            label="이메일"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요."
            btnLabel="중복확인"
            btnActive={true}
            onClickBtn={onEmailDuplication}
          />
          <SignupTextField
            id="phone"
            label="휴대폰"
            value={phone}
            onChange={onChangePhone}
            placeholder="휴대폰 번호 확인"
            btnLabel="인증번호 받기"
            btnActive={true}
            onClickBtn={onSendSMS}
          />
          <SignupTextField
            id="phoneCh"
            label="인증번호"
            value={verified}
            onChange={onChangeVerified}
            placeholder="인증번호 확인"
            btnLabel="확인"
            btnActive={true}
            onClickBtn={onVerifySMS}
          />

          <Box p={8} sx={{ alignItems: "center", textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#ffffff" }}
              disabled={!(password === passwordCh)}
            >
              가입하기
            </Button>
          </Box>
        </form>
      </Box>
      <div
        id="recaptcha-container"
        // data-sitekey="6LcsaxsdAAAAAEBn0sPDCEncnU9564MisyRuDzD_"
        data-callback="sendForm"
        data-size="invisible"
      ></div>
    </Container>
  );
};

export default ProfileReviseContainer;
