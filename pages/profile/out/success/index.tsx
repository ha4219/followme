import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import { useEffect } from "react";
import { API, resetToken } from "@src/API";

const ProfileOutSuccess = () => {
  useEffect(() => {
    resetToken();
  }, []);
  return (
    <Container maxWidth="lg">
      <MainContainer>
        <div className="gray">
          <CheckIcon
            fontSize="large"
            className="icon"
            sx={{ width: 80, height: 80 }}
          />
          <div className="title">회원탈퇴가 완료되었습니다.</div>
        </div>
        <div className="content">
          그동안 팔로미 서비스를 이용해주셔서 감사합니다.
          <br />더 나은 서비스로 찾아뵙겠습니다.
        </div>
        <div className="btns">
          <Link href="/">
            <a className="main">메인으로</a>
          </Link>
          <Link href="/user/signin">
            <a className="login">로그인</a>
          </Link>
        </div>
      </MainContainer>
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

export default ProfileOutSuccess;
