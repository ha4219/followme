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
import { IUser } from "types/apiType";
import {
  checkEmail,
  checkId,
  checkNickName,
  checkPhone,
} from "@helpers/checkReg";

import AWS from "aws-sdk";
import { config } from "@config/s3Config";

AWS.config.update({
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName },
  region: config.region,
});

const ProfileReviseContainer = () => {
  const router = useRouter();

  const putObjectWrapper = (params) => {
    return new Promise((resolve, reject) => {
      myBucket.putObject(params, function (err, result) {
        if (err) reject(err);
        if (result) resolve(result);
      });
    });
  };

  const [user, setUser] = useState<IUser>();

  const userId = useRecoilValue(idState);
  const [name, setName, onChangeName] = useInput("");
  const [id, setId] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [passwordCh, setPasswordCh, onChangePasswordCh] = useInput("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verified, setVerified, onChangeVerified] = useInput("");
  const [emailV, setEmailV] = useState(true);
  const [nickNameV, setNickNameV] = useState(true);
  const [phoneV, setPhoneV] = useState(true);
  const [profileImage, setProfileImage] = useState<any>();

  const onChangeNickName = useCallback(
    (e) => {
      setNickName(e.target.value);
      setNickNameV(user && user.nickName === e.target.value ? true : false);
    },
    [nickName]
  );

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
      setEmailV(user && user.email === e.target.value ? true : false);
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

  const getUser = async () => {
    API.post("/user/profile", {
      id: userId,
    })
      .then((response) => {
        setUser(response.data.userData[0]);
        setId(response.data.userData[0].id);
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
        setPhoneV(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("인증실패");
      });
  }, [verified]);

  const onNickNameDuplication = useCallback(async () => {
    if (!checkNickName(nickName)) {
      toast.warning("닉네임을 입력해주세요");
      return;
    }
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
    if (!checkEmail(email)) {
      toast.warning("알맞은 형식의 이메일을 입력해주세요 ");
      return;
    }
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      submitOnProfileImage();
      const { data } = await API.post("/user/profileRevise", {
        name: name,
        id: id,
        nickName: nickName,
        password: password,
        email: email,
        phoneNum: phone,
      });
      if (data?.data === "success") {
        toast.success("개인정보 수정 성공");
        router.push("/profile/home");
      }
    } catch (e) {
      toast.error("개인정보 수정 실패");
      console.log(e);
    }
    // toast.info("작업중입니다.");
  };

  const onClickProfileImage = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      if (input?.files) {
        setProfileImage(input.files[0]);
      }
    });
  };

  const submitOnProfileImage = async () => {
    try {
      if (profileImage) {
        putObjectWrapper({
          Body: profileImage,
          Bucket: config.bucketName,
          Key: `profile/${id}`,
        })
          .then((r) => {
            console.log(r);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    } catch (e) {
      console.log(e);
    }
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
            btnActive={!nickNameV}
            onClickBtn={onNickNameDuplication}
          />
          <SignupTextField
            id="id"
            label="아이디"
            value={userId}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            placeholder=""
          />
          <SignupTextField
            id="password"
            type="password"
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요."
            helperText="(8~16자/영문과 숫자, 특수문자를 포함하여 입력해주세요)"
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
            btnActive={!emailV}
            onClickBtn={onEmailDuplication}
          />
          <SignupTextField
            id="phone"
            label="휴대폰"
            value={phone}
            disabled={true}
            placeholder={""}
          />
          <SignupTextField
            id="profileImage"
            label="프로필 사진"
            value={profileImage?.name}
            // onChange={onChangeVerified}
            placeholder="profile Image"
            btnLabel="search"
            btnActive={true}
            onClickBtn={onClickProfileImage}
          />

          <Box p={8} sx={{ alignItems: "left", textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#ffffff" }}
              disabled={
                !(
                  emailV &&
                  nickNameV &&
                  phoneV &&
                  password === passwordCh &&
                  password.length
                )
              }
            >
              수정하기
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
