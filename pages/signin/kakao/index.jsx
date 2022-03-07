import { API } from "@src/API";
import { useEffect } from "react";

const KakaoLogin = () => {
  const test = async (code) => {
    const res = await API.get(`/user/kakao/oauth/${code}`);
  };
  useEffect(() => {
    const href = window.location.href;
    const params = new URL(document.location).searchParams;
    const code = params.get("code");
    console.log(1);

    test(code);
  }, []);
  return <div>kakao</div>;
};

export default KakaoLogin;
