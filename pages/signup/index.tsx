import {
  Container,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Divider,
} from "@mui/material";
import useInput from "@hooks/useInput";
import SignupTextField from "@components/SignupTextField";

const Signup = () => {
  const [value, setValue, onChangeValue] = useInput("");

  return (
    <Box>
      <Typography variant="h6" color="initial">
        회원가입
      </Typography>
      <form>
        <SignupTextField
          label="이름"
          value={value}
          onChange={onChangeValue}
          placeholder="홍길동"
          btnLabel=""
          btnActive={true}
        />
        <SignupTextField
          label="닉네임"
          value={value}
          onChange={onChangeValue}
          placeholder="홍길동"
          btnLabel=""
          btnActive={true}
        />
        <SignupTextField
          label="아이디"
          value={value}
          onChange={onChangeValue}
          placeholder="아이디를 입력해주세요."
          btnLabel="중복확인"
          btnActive={true}
        />
        <SignupTextField
          type="password"
          label="비밀번호"
          value={value}
          onChange={onChangeValue}
          placeholder="비밀번호를 입력해주세요."
          helperText="(8~16자/영문과 숫자, 특수문자 2가지 이상을 조합하여 입력해주세요)"
        />
        <SignupTextField
          type="password"
          label="비밀번호 확인"
          value={value}
          onChange={onChangeValue}
          placeholder="비밀번호 확인"
          helperText="(다시 한 번 비밀번호를 입력해주세요)"
        />
        <SignupTextField
          type="email"
          label="이메일"
          value={value}
          onChange={onChangeValue}
          placeholder="이메일을 입력해주세요."
          btnLabel="중복확인"
          btnActive={true}
        />
        <SignupTextField
          label="휴대폰"
          value={value}
          onChange={onChangeValue}
          placeholder="휴대폰 번호 확인"
          btnLabel="인증번호 받기"
          btnActive={true}
        />
        <SignupTextField
          label="인증번호"
          value={value}
          onChange={onChangeValue}
          placeholder="인증번호 확인"
          btnLabel="확인"
          btnActive={true}
        />
      </form>
      <Divider sx={{ borderWidth: 2, borderColor: "#3e3e3e" }} />
      hihi
      <Divider />
    </Box>
  );
};

export default Signup;
