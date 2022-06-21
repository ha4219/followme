import dynamic from "next/dynamic";

const EnterSignup = dynamic(() => import("../SignupComp/index"), {
  ssr: false,
});

const EnterSignupWrapper = () => {
  return <EnterSignup />;
};

export default EnterSignupWrapper;
