import { API } from "@src/API";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Naver = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const test = async (code) => {
    try {
      const res = await API.get(`/user/naver/oauth/${code}`);
    } catch (e: any) {
      console.log("send server error", e);
      setError(e.message);
    }
  };
  useEffect(() => {
    try {
      const code = router.asPath
        .split("?")[1]
        .replace("code=", "")
        .replace("&state=", "");
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

export default Naver;
