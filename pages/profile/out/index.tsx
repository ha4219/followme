import ProfileLeftLayout from "@components/profile/ProfileLeftLayout";
import styled from "@emotion/styled";
import useInput from "@hooks/useInput";
import { Box, Button, Container, TextField } from "@mui/material";
import { API, resetToken } from "@src/API";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ProfileOut = () => {
  const router = useRouter();
  const [id, setId, onChangeId] = useInput("");
  const [password, setPassowrd, onChangePassword] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/user/exit", {
        id: id,
        password: password,
      });
      if (data.data === 1) {
        toast.success("followme 탈퇴 성공");
      } else {
        toast.error("followme 탈퇴 실패");
      }
      router.push("/profile/out/success");
    } catch (e) {
      console.log("error out", e);
      toast.error("followme 탈퇴 실패");
    } finally {
      // resetToken();
    }
  };

  return (
    <Container maxWidth="lg">
      <ProfileLeftLayout>
        <MainContainer maxWidth="320px">
          <div className="title">팔로미 회원탈퇴를 원하십니까?</div>
          <div className="content">
            회원님의 개인정보 보호를 위해 아이디와 비밀번호를 다시 한 번
            입력해주세요. 입력 즉시 탈퇴 처리됩니다.
          </div>
          <form onSubmit={onSubmit}>
            <TextField
              className="pw"
              fullWidth
              type="id"
              value={id}
              onChange={onChangeId}
              placeholder="아이디를 입력해주세요"
            />
            <TextField
              className="pw"
              fullWidth
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요"
            />
            <Box textAlign="center">
              <Button className="submit" type="submit" variant="contained">
                탈퇴하기
              </Button>
            </Box>
          </form>
        </MainContainer>
      </ProfileLeftLayout>
    </Container>
  );
};

const MainContainer = styled(Box)`
  margin: 0 auto;
  padding: 5rem 0;

  & .title {
    color: #0068ff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & .content {
    margin-bottom: 1rem;
  }

  & form {
    padding-left: auto;
    padding-right: auto;
  }

  & .submit {
    margin: 5rem;
    text-align: center;
  }
  & .id {
    margin-bottom: 1rem;
  }
  & .pw {
    margin-bottom: 1rem;
  }
`;

export default ProfileOut;
