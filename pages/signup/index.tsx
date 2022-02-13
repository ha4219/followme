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

import { useCallback } from "react";
import { routes } from "../../src/routes";
import axios from "axios";
import { API } from "src/API";
import { Head } from "next/head";

const Signup = () => {
  const [name, setName, onChangeName] = useInput("");
  const [nickName, setNickName, onChangeNickName] = useInput("");
  const [id, setId, onChangeId] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [passwordCh, setPasswordCh, onChangePasswordCh] = useInput("");
  const [email, setEmail, onChangeEmail] = useInput("");
  const [phone, setPhone, onChangePhone] = useInput("");
  const [verified, setVerified, onChangeVerified] = useInput("");

  const onIdDuplication = useCallback(async () => {
    const { data } = await API.post("/user/checkId", {
      id: id,
    });
    console.log(data);
  }, [id]);

  const onEmailDuplication = useCallback(async () => {
    const { data } = await API.post("/user/checkEmail", {
      email: email,
    });
    console.log(data);
  }, [email]);

  const onNickNameDuplication = useCallback(async () => {
    const { data } = await API.post("/user/checkEmail", {
      nickName: nickName,
    });
    console.log(data);
  }, [email]);

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
        });
        if (data?.data === "success") {
          alert(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    [email, id, name, nickName, password, phone]
  );

  return (
    <>
      {/* <Head>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" />
        <script src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js" />
      </Head> */}
      <Container maxWidth="xs" sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={10}>
          <form onSubmit={onSubmit}>
            <Box>
              <Typography variant="h6" color="initial" pl={2}>
                회원가입
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
                btnLabel=""
                btnActive={true}
              />
              <SignupTextField
                id="id"
                label="아이디"
                value={id}
                onChange={onChangeId}
                placeholder="아이디를 입력해주세요."
                btnLabel="중복확인"
                btnActive={true}
                onClickBtn={onIdDuplication}
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
              />
              <SignupTextField
                id="phoneCh"
                label="인증번호"
                value={verified}
                onChange={onChangeVerified}
                placeholder="인증번호 확인"
                btnLabel="확인"
                btnActive={true}
              />
            </Box>
            <Divider
              sx={{ borderWidth: 1, borderColor: "#3e3e3e", marginTop: "4rem" }}
            />
            <Box px={5} py={4}>
              <Box px={2} pb={2}>
                <div>
                  <Checkbox />
                  <span>회원약관 (필수)</span>
                </div>
                <div>
                  <Checkbox />
                  <span>개인정보 처리방침 (필수)</span>
                </div>
                <div>
                  <Checkbox />
                  <span>개인정보 제 3자 이용동의 (필수)</span>
                </div>
              </Box>
              <Divider sx={{ borderWidth: 1, borderColor: "#dcdce6" }} />
              <Box mt={2}>
                <Checkbox />
                <span>모든 약관에 동의합니다</span>
              </Box>
            </Box>
            <Divider sx={{ borderWidth: 1, borderColor: "#3e3e3e" }} />
            <Box p={8} sx={{ alignItems: "center", textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ color: "#ffffff" }}
              >
                가입하기
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
