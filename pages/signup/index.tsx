import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Checkbox,
} from "@mui/material";
import useInput from "@hooks/useInput";
import SignupTextField from "@components/SignupTextField";
import { auth } from "@config/firebaseConfig";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
} from "firebase/auth";

import { useCallback, useEffect, useState } from "react";
import { API } from "src/API";
import Head from "next/head";
import { phoneVerifyAndPass } from "@helpers/signUpHelper";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  checkEmail,
  checkId,
  checkNickName,
  checkPhone,
} from "@helpers/checkReg";
import styled from "@emotion/styled";
import { submitOnProfileImage } from "@helpers/s3UploadHelper";
import { convertURLtoFile } from "@helpers/programHelper";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const Signup = () => {
  const router = useRouter();
  const [checked, setChecked] = useState([true, true, true]);
  const [name, setName, onChangeName] = useInput("");
  const [nickName, setNickName] = useInput("");
  const [id, setId] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [passwordCh, setPasswordCh, onChangePasswordCh] = useInput("");
  const [email, setEmail] = useInput("");
  const [phone, setPhone] = useInput("");
  const [verified, setVerified, onChangeVerified] = useInput("");
  const [idV, setIdV] = useState(false);
  const [emailV, setEmailV] = useState(false);
  const [nickNameV, setNickNameV] = useState(false);
  const [phoneV, setPhoneV] = useState(false);

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

  const onChangeId = useCallback(
    (e) => {
      setId(e.target.value);
      setIdV(false);
    },
    [id]
  );
  const onChangeNickName = useCallback(
    (e) => {
      setNickName(e.target.value);
      setNickNameV(false);
    },
    [nickName]
  );

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
      setEmailV(false);
    },
    [email]
  );

  const onChangePhone = useCallback(
    (e) => {
      setPhone(e.target.value);
      setPhoneV(false);
    },
    [phone]
  );

  const onIdDuplication = useCallback(async () => {
    if (!checkId(id)) {
      toast.warning("???????????? ??????????????????");
      return;
    }
    API.post("/user/checkId", {
      id: id,
    })
      .then((res) => {
        if (res.data.checkingId === "allow") {
          setIdV(true);
          toast.success("?????? ????????? ??????????????????.");
        } else {
          toast.error("?????? ???????????? ??????????????????.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("id check error");
      });
  }, [id]);

  const onEmailDuplication = useCallback(async () => {
    if (!checkEmail(email)) {
      toast.warning("????????? ????????? ???????????? ?????????????????? ");
      return;
    }
    API.post("/user/checkEmail", {
      email: email,
    })
      .then((res) => {
        if (res.data.checkingEmail === "allow") {
          setEmailV(true);
          toast.success("?????? ????????? ??????????????????.");
        } else {
          toast.error("?????? ???????????? ??????????????????.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("nickname check error");
      });
  }, [email]);

  const onNickNameDuplication = useCallback(async () => {
    if (!checkNickName(nickName)) {
      toast.warning("???????????? ??????????????????");
      return;
    }
    API.post("/user/checkNickName", {
      nickName: nickName,
    })
      .then((res) => {
        if (res.data.checkingNickname === "allow") {
          setNickNameV(true);
          toast.success("?????? ????????? ??????????????????.");
        } else {
          toast.error("?????? ???????????? ??????????????????.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("email check error");
      });
  }, [nickName]);

  const onSendSMS = useCallback(async () => {
    if (!checkPhone(phone)) {
      toast.warning("????????? ????????? ????????? ????????? ??????????????????");
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
          toast.success("???????????? ????????????");
        })
        .catch(function (error) {
          // Error; SMS not sent
          // ...
          console.log(error);
          toast.error("???????????? ????????????");
        });
    } else {
      toast.error("???????????? ?????? ????????? ???????????????.");
    }
  }, [phone]);

  const onVerifySMS = useCallback(async () => {
    window.confirmationResult
      .confirm(verified)
      .then((res) => {
        console.log(res);
        toast.success("????????????");
        setPhoneV(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("????????????");
      });
  }, [verified]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const { data } = await API.post("/user/signup", {
          name: name,
          nickName: nickName,
          id: id,
          password: password,
          email: email,
          phoneNum: phone,
          type: 0,
        });
        if (data.data === "success") {
          toast.success("???????????? ??????");
          router.push("/signup/success");

          const img = await convertURLtoFile(
            "https://followme1.vercel.app/userIcon.png"
          );
          console.log(img);

          submitOnProfileImage({
            id: id,
            profileImage: img,
          });
        }
      } catch (e) {
        toast.error("???????????? ??????");
        console.log(e);
      }
    },
    [email, id, name, nickName, password, phone]
  );

  useEffect(() => {
    initilizeCaptcha();
  }, []);

  return (
    <>
      <Head>
        <title>????????????</title>
      </Head>
      <Container maxWidth="lg" sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={10}>
          <form onSubmit={onSubmit}>
            <SignupCenterBox marginBottom={4}>
              <Box className="signupCenterBoxCenter">
                <Typography variant="h6" color="initial" pl={2}>
                  ????????????
                </Typography>
                <SignupTextField
                  id="name"
                  label="??????"
                  value={name}
                  onChange={onChangeName}
                  placeholder="?????????"
                  btnLabel=""
                  btnActive={true}
                />
                <SignupTextField
                  id="nickName"
                  label="?????????"
                  value={nickName}
                  onChange={onChangeNickName}
                  placeholder="?????????"
                  btnLabel="????????????"
                  btnActive={!nickNameV}
                  onClickBtn={onNickNameDuplication}
                />
                <SignupTextField
                  id="id"
                  label="?????????"
                  value={id}
                  onChange={onChangeId}
                  placeholder="???????????? ??????????????????."
                  btnLabel="????????????"
                  btnActive={!idV}
                  onClickBtn={onIdDuplication}
                />
                <SignupTextField
                  id="password"
                  type="password"
                  label="????????????"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="??????????????? ??????????????????."
                  helperText="(8~16???/????????? ??????, ??????????????? ???????????? ??????????????????)"
                />
                <SignupTextField
                  id="passwordCh"
                  type="password"
                  label="???????????? ??????"
                  value={passwordCh}
                  onChange={onChangePasswordCh}
                  placeholder="???????????? ??????"
                  helperText="(?????? ??? ??? ??????????????? ??????????????????)"
                />
                <SignupTextField
                  id="email"
                  type="email"
                  label="?????????"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="???????????? ??????????????????."
                  btnLabel="????????????"
                  btnActive={!emailV}
                  onClickBtn={onEmailDuplication}
                />
                <SignupTextField
                  id="phone"
                  label="?????????"
                  value={phone}
                  onChange={onChangePhone}
                  placeholder="????????? ?????? ??????"
                  btnLabel="???????????? ??????"
                  btnActive={!phoneV}
                  onClickBtn={onSendSMS}
                />
                <SignupTextField
                  id="phoneCh"
                  label="????????????"
                  value={verified}
                  onChange={onChangeVerified}
                  placeholder="???????????? ??????"
                  btnLabel="??????"
                  btnActive={!phoneV}
                  onClickBtn={onVerifySMS}
                />
              </Box>
            </SignupCenterBox>

            <Divider sx={{ borderWidth: 1, borderColor: "#3e3e3e" }} />
            <Box p={8} sx={{ alignItems: "center", textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ color: "#ffffff" }}
                disabled={
                  !(
                    idV &&
                    emailV &&
                    nickNameV &&
                    phoneV &&
                    password === passwordCh &&
                    password.length
                  )
                }
              >
                ????????????
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
    </>
  );
};

const SignupCenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  & .signupCenterBoxCenter {
    display: inline-block;
  }

  & .signupCenterBoxCenterR {
  }
`;

export default Signup;
