import { API } from "@src/API";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const KakaoLogin = () => {
  const router = useRouter();
  const [data, setData] = useState();

  const test = async (code) => {
    try {
      const res = await API.get(`/user/kakao/oauth/${code}`);
      setData(res.data);
    } catch (e) {
      console.log("naver send error", e);
    }
  };
  useEffect(() => {
    try {
      const code = router.asPath.split("?")[1].replace("code=", "");
      test(code);
    } catch (e) {
      console.log(e, "kakao login error");
    }
  }, [router.isReady]);
  return (
    <div>
      kakao
      {data}
    </div>
  );
};

export default KakaoLogin;
