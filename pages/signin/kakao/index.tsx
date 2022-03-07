import { API } from "@src/API";
import { useRouter } from "next/router";
import { useEffect } from "react";

const KakaoLogin = () => {
  const router = useRouter();

  const test = async (code) => {
    const res = await API.get(`/user/kakao/oauth/${code}`);
  };
  useEffect(() => {
    try {
      const code = router.asPath.split("?")[1].replace("code=", "");
      test(code);
    } catch (e) {
      console.log(e, "kakao login error");
    }
  }, [router.isReady]);
  return <div>kakao</div>;
};

export default KakaoLogin;
