import { API } from "@src/API";
import { useEffect } from "react";

const KakaoLogin = () => {
  const test = async (code: string) => {
    const res = await API.get(`/user/kakao/oauth/${code}`);
  };
  useEffect(() => {
    const href = window.location.href;
    const params = new URL(document.location).searchParams;
    const code = params.get("code");

    test(code);
  }, []);
  return <div>kakao</div>;
};

export default KakaoLogin;
