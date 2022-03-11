import { API, setToken } from "@src/API";
import { authState, idState } from "@store/auth";
import { getUserProfile } from "api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

const KakaoLogin = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const [loggedIn, setLoggedIn] = useRecoilState(authState);
  const [loggedInId, setLoggedInId] = useRecoilState(idState);

  const setProfile = async () => {
    try {
      const { data } = await getUserProfile();
      toast.success("로그인 성공");
      setLoggedIn(data.id);
    } catch (e) {
      console.log(e);
    }
  };
  const test = async (code) => {
    try {
      const { data } = await API.get(`/user/kakao/oauth/${code}`);
      setData(data.success);
      if (data.success && data) {
        setToken(data.accessToken);
        setProfile();
      }
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
