import { API } from "@src/API";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const KakaoLogin = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const test = async (code) => {
    try {
      const res = await API.get(`/user/kakao/oauth/${code}`);
      setData(res.data.success);
    } catch (e: any) {
      console.log("naver send error", e);
      setError(e.message);
    }
  };
  useEffect(() => {
    try {
      const code = router.asPath.split("?")[1].replace("code=", "");
      setCode(code);
      test(code);
    } catch (e) {
      console.log(e, "kakao login error");
    }
  }, [router.isReady]);
  return (
    <div>
      <span>{code}</span>
      <br />
      <span>{error}</span>
      {data}
    </div>
  );
};

export default KakaoLogin;
