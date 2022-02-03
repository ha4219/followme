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

const Signup = () => {
  const [name, setName, onChangeName] = useInput("test");
  const [nickName, setNickName, onChangeNickName] = useInput("test");
  const [id, setId, onChangeId] = useInput("test");
  const [password, setPassword, onChangePassword] = useInput("test");
  const [passwordCh, setPasswordCh, onChangePasswordCh] = useInput("test");
  const [email, setEmail, onChangeEmail] = useInput("test@naver.com");
  const [phone, setPhone, onChangePhone] = useInput("01034506630");
  const [verified, setVerified, onChangeVerified] = useInput("1234");

  const onSubmit = async () => {
    try {
      const res = await API.post("/user/signup", {
        name: name,
        nickName: nickName,
        id: id,
        password: password,
        email: email,
        phoneNum: phone,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ fontFamily: "paybooc-Medium" }}>
      <Box py={10}>
        <Box>
          <Typography variant="h6" color="initial" pl={2}>
            회원가입
          </Typography>
          <form onSubmit={onSubmit}>
            <SignupTextField
              label="이름"
              value={name}
              onChange={onChangeName}
              placeholder="홍길동"
              btnLabel=""
              btnActive={true}
            />
            <SignupTextField
              label="닉네임"
              value={nickName}
              onChange={onChangeNickName}
              placeholder="홍길동"
              btnLabel=""
              btnActive={true}
            />
            <SignupTextField
              label="아이디"
              value={id}
              onChange={onChangeId}
              placeholder="아이디를 입력해주세요."
              btnLabel="중복확인"
              btnActive={true}
            />
            <SignupTextField
              type="password"
              label="비밀번호"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
              helperText="(8~16자/영문과 숫자, 특수문자 2가지 이상을 조합하여 입력해주세요)"
            />
            <SignupTextField
              type="password"
              label="비밀번호 확인"
              value={passwordCh}
              onChange={onChangePasswordCh}
              placeholder="비밀번호 확인"
              helperText="(다시 한 번 비밀번호를 입력해주세요)"
            />
            <SignupTextField
              type="email"
              label="이메일"
              value={email}
              onChange={onChangeEmail}
              placeholder="이메일을 입력해주세요."
              btnLabel="중복확인"
              btnActive={true}
            />
            <SignupTextField
              label="휴대폰"
              value={phone}
              onChange={onChangePhone}
              placeholder="휴대폰 번호 확인"
              btnLabel="인증번호 받기"
              btnActive={true}
            />
            <SignupTextField
              label="인증번호"
              value={verified}
              onChange={onChangeVerified}
              placeholder="인증번호 확인"
              btnLabel="확인"
              btnActive={true}
            />
          </form>
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
            variant="contained"
            sx={{ color: "#ffffff" }}
            onClick={onSubmit}
          >
            가입하기
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://3.34.24.103:3000");
  const posts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Signup;
