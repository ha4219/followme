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
        toast.success("????????????");
        setPhoneV(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("????????????");
      });
  }, [verified]);

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
          // setEmailV(true);
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
          // setEmailV(true);
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
        toast.success("???????????? ?????? ??????");
        router.push("/profile/home");
      }
    } catch (e) {
      toast.error("???????????? ?????? ??????");
      console.log(e);
    }
    // toast.info("??????????????????.");
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
            ??? ?????? ??????
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
            value={userId}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            placeholder=""
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
            disabled={true}
            placeholder={""}
          />
          <SignupTextField
            id="profileImage"
            label="????????? ??????"
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
  );
};

export default ProfileReviseContainer;
