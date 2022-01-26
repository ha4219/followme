import { Container, Grid, Typography, TextField, FormControlLabel , Box, Button, FormControl, FormHelperText } from "@mui/material";
import useInput from '@hooks/useInput';
import SignupTextField from '@components/SignupTextField';

const Signup = () => {
  const [value, setValue, onChangeValue] = useInput('');

  return (
    <Box px={"30%"}>
      <Typography variant="h6" color="initial">
        회원가입
      </Typography>
      <Grid container mb={3}>
        <Grid item xs={4} md={4}>
          <Typography color="#3e3e3e" mt={2} sx={{fontWeight: 'bold'}}>
            이름
          </Typography>
        </Grid>
        <Grid item xs={5} md={5}>
          <TextField
            id="name"
            placeholder={"홍길동"}
            value={value}
            onChange={onChangeValue}
            // helperText={helperText}
          />
        </Grid>
      </Grid>
      
      <Grid container mb={3}>
        <Grid item xs={4} md={4}>
          <Typography color="#3e3e3e" mt={2} sx={{fontWeight: 'bold'}}>
            아이디
          </Typography>
        </Grid>
        <Grid item xs={5} md={5}>
          <TextField
            id="name"
            placeholder={"아이디를 입력해주세요."}
            value={value}
            onChange={onChangeValue}
            // helperText={helperText}
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <Box mt={1} sx={{alignItems: 'center', textAlign: 'center'}}>
            <Button variant="contained" disabled>
              <Typography color="white">
                중복확인
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box mb={3} sx={{display: 'flex'}}>
        <Box sx={{flex: 1}}>
          <Typography color="#3e3e3e" mt={2} sx={{fontWeight: 'bold'}}>
            아이디
          </Typography>
        </Box>
        <Box sx={{flex: 4}}>
          <TextField
            id="name"
            placeholder={"아이디를 입력해주세요."}
            value={value}
            onChange={onChangeValue}
            // helperText={helperText}
          />
        </Box>
        <Box mt={1} ml={1} sx={{alignItems: 'center', textAlign: 'center'}}>
          <Button variant="contained" disabled>
            <Typography color="white">
              중복확인
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
};

export default Signup;