import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Container from "@mui/material/Container";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";

const Signin = () => {
  return (
    <Container maxWidth="xs" sx={{ fontFamily: "paybooc-Medium" }}>
      <Box py={5}>
        <Typography variant="h6" py={5}>
          로그인
        </Typography>
        <Box>
          <form>
            <div>
              <TextField
                fullWidth
                placeholder="아이디를 입력해주세요."
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
                fullWidth
                type="password"
                placeholder="비밀번호를 입력해주세요."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8f969f",
                fontSize: "0.8rem",
              }}
            >
              <Link href="/find">아이디 / 비밀번호 찾기</Link>
              <Link href="/signup">회원가입하기</Link>
            </Box>

            <Button fullWidth variant="contained" size="large">
              로그인
            </Button>
          </form>
        </Box>
        <Box py={6}>
          <Box
            sx={{ color: "#8f969f", fontSize: "0.8rem", textAlign: "center" }}
          >
            SNS 계정으로 로그인
          </Box>
          <Button
            sx={{ marginTop: "1rem", backgroundColor: "#03c75a" }}
            fullWidth
            variant="contained"
            size="large"
          >
            네이버 로그인
          </Button>
          <Button
            sx={{ marginTop: "1rem", backgroundColor: "#fee500" }}
            fullWidth
            variant="contained"
            size="large"
          >
            카카오 로그인
          </Button>
          <Button
            sx={{ marginTop: "1rem", backgroundColor: "#3a5ca9" }}
            fullWidth
            variant="contained"
            size="large"
          >
            Facebook 로그인
          </Button>
          <Button
            sx={{ marginTop: "1rem", backgroundColor: "#e74133" }}
            fullWidth
            variant="contained"
            size="large"
          >
            Google 로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
