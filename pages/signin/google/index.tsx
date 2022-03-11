import { API } from "@src/API";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GoogleLogin = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const test = async (code) => {
    try {
      const res = await API.post(`/user/google/oauth`, {
        token: code,
      });
      setData(res.data.success);
    } catch (e: any) {
      console.log("send server error", e);
      setError(e.message);
    }
  };
  useEffect(() => {
    try {
      const code = router.asPath.split("?code=")[1].split("&scope=")[0];

      setCode(code);
      test(code);
    } catch (e) {
      console.log(e, "naver token not");
    }
  }, [router.isReady]);

  return (
    <div>
      <span>{code}</span>
      <br />
      <span>{error}</span>
    </div>
  );
};

export default GoogleLogin;
