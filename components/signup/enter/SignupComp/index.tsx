import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Checkbox,
  Dialog,
  TextField,
} from "@mui/material";
import useInput from "@hooks/useInput";
import SignupTextField from "@components/SignupTextField";
import { auth } from "@config/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

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
import { useRecoilState, useRecoilValue } from "recoil";
import { enterSignupState } from "@store/map";
import MapOneMarker from "@components/signup/MapOneMarker";
import DragDrop from "@components/DragDrop";
import DaumPostcode from "react-daum-postcode";
import { submitOnProfileImage } from "@helpers/s3UploadHelper";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
    kakao: any;
  }
}

const EnterSignup = () => {
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
  const [enterPos, setEnterPos] = useRecoilState(enterSignupState);
  const [show, setShow] = useState(false);
  const [address, setAddress, onChangeAddress] = useInput("");
  const [content, setContent, onChangeContent] = useInput("");
  // const [provider, setProvider, onChangeProvider] = useInput("");
  const [category, setCategory] = useInput("??????");
  // const [profileImage, setProfileImage, onChangeProfileImage] = useInput("");
  const [profileImage, setProfileImage] = useState<any>();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [showTag, setShowTag] = useState(false);

  const [geo, setGeo] = useState<any>();
  const [isLoading, setLoading] = useState(true);
  // const [a, setA] = useState('');
  // const [b, setB]

  const kakaoMapInit = async () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33, 126),
        };
        const map = new window.kakao.maps.Map(container, options);
        window.kakao.map = map;

        setLoading(false);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  const onChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    if (!isLoading) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      setGeo(geocoder);
    }
  }, [isLoading]);

  const onChangeShow = () => {
    setShow(!show);
  };

  const onCompletePost = (data) => {
    setAddress(data.roadAddress);
    setShow(false);
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

  useEffect(() => {
    if (address && window.kakao?.maps && geo) {
      try {
        geo.addressSearch(address, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            setEnterPos([result[0].y, result[0].x]);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [address]);

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
        toast.error("email check error");
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
        toast.error("nickname check error");
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

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked]);
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

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        submitOnProfileImage({ profileImage, id });
      } catch (e) {
        console.log("s3 upload", e);
      }

      try {
        const { data } = await API.post("/user/signup", {
          name: name,
          nickName: nickName,
          id: id,
          password: password,
          email: email,
          phoneNum: phone,
          type: 1,
          tags: tags,
          category: category,
          content: content,
          profileImage: `${process.env.NEXT_PUBLIC_S3URL}/profile/${id}`,
          latitude: enterPos[0].toString(),
          longitude: enterPos[1].toString(),
          address: address,
        });
        if (data.data === "success") {
          toast.success("???????????? ??????");
          router.push("/signup/success");
        }
      } catch (e) {
        toast.error("???????????? ??????");
        console.log(e);
      }
    },
    [
      address,
      category,
      content,
      email,
      enterPos,
      id,
      name,
      nickName,
      password,
      phone,
      profileImage,
      tags,
    ]
  );

  useEffect(() => {
    kakaoMapInit();
  }, []);

  useEffect(() => {
    initilizeCaptcha();
  }, []);

  return (
    <>
      {show && (
        <Dialog open={show}>
          <DaumPostcode autoClose onComplete={onCompletePost} />
        </Dialog>
      )}
      {showTag && (
        <Dialog onClose={() => setShowTag(false)} open={showTag}>
          <>
            <TextField
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setTags(Array.from(new Set([tag, ...tags])));
                  setTag("");
                }
              }}
            />
            <div>
              {tags.map((item, index) => (
                <span key={index}>#{item},</span>
              ))}
            </div>
          </>
        </Dialog>
      )}
      <Container maxWidth="lg" sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={10}>
          <form onSubmit={onSubmit}>
            <SignupCenterBox marginBottom={4}>
              <Box className="signupCenterBoxCenter">
                <Typography variant="h6" color="initial" pl={2}>
                  ?????? ????????????
                </Typography>
                <SignupTextField
                  id="name"
                  label="????????????"
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
                <SignupTextField
                  id="address"
                  label="??????"
                  value={address}
                  placeholder="??????"
                  btnLabel="??????"
                  btnActive={true}
                  onClickBtn={() => setShow(true)}
                />
                <SignupTextField
                  id="content"
                  label="??????"
                  value={content}
                  onChange={onChangeContent}
                  placeholder="??????"
                  btnLabel=""
                />
                <div className="selectDiv">
                  <div className="categoryLabel">????????????</div>
                  <Select
                    labelId="category-label"
                    id="category"
                    className="categoryField"
                    value={category}
                    onChange={onChangeCategory}
                    autoWidth
                    label="????????????"
                  >
                    <MenuItem value={"??????"}>??????</MenuItem>
                    <MenuItem value={"?????????"}>?????????</MenuItem>
                    <MenuItem value={"?????????"}>?????????</MenuItem>
                  </Select>
                </div>
                <SignupTextField
                  id="tags"
                  label="tags"
                  value={tags.toString()}
                  // onChange={onChangeCategory}
                  placeholder="????????????"
                  btnLabel="add"
                  btnActive={true}
                  onClickBtn={() => setShowTag(true)}
                />
                <SignupTextField
                  id="profileImage"
                  label="????????? ??????"
                  value={profileImage?.name}
                  placeholder="profile Image"
                  btnLabel="search"
                  btnActive={true}
                  onClickBtn={onClickProfileImage}
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
        <div id="map" />
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

  & .selectDiv {
    display: flex;
    padding: 1rem;

    & .categoryLabel {
      font-family: paybooc-Bold;
      font-size: 1rem;
      align-self: center;
      // width: 200px;
      @media screen and (max-width: 600px) {
        width: 130px;
      }
      @media screen and (min-width: 600px) {
        width: 200px;
      }
    }
    & .categoryField {
      @media screen and (max-width: 900px) {
        width: 240px;
      }
      @media screen and (min-width: 900px) {
        width: 400px;
      }
      // width: 400px;
      height: 40px;
    }
  }
`;

export default EnterSignup;
