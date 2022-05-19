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
import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const FindId = () => {
  const [name, setName, onChangeName] = useInput("");
  const [phone, setPhone, onChangePhone] = useInput("");
  const [success, onSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
  };

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
            <div className="title">회원가입이 완료되었습니다.</div>
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
              ID 찾기
            </Typography>
            <Box>
              <form onSubmit={onSubmit}>
                <div>
                  <TextField
                    value={name}
                    onChange={onChangeName}
                    type="name"
                    placeholder="이름를 입력해주세요."
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
                    value={phone}
                    onChange={onChangePhone}
                    placeholder="휴대폰 번호를 입력해주세요."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="topMargin">
                  <Button type="submit" variant="contained">
                    찾기
                  </Button>
                </div>
              </form>
            </Box>
          </Box>
        </MainFixContainer>
      )}
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

export default FindId;
