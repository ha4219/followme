import SingupUserTypeBtns from "@components/signup/UserTypeBtns";
import { Container } from "@mui/material";
import Head from "next/head";

const SignupBefore = () => {
  return (
    <Container>
      <Head>
        <title>회원가입</title>
      </Head>
      <SingupUserTypeBtns />
    </Container>
  );
};

export default SignupBefore;
