import Head from "next/head";
import SignupCompWrapper from "@components/signup/enter/SignupCompWrapper";

const Signup = () => {
  return (
    <>
      <Head>
        <title>기업용 회원가입</title>
      </Head>
      <SignupCompWrapper />
    </>
  );
};

export default Signup;
