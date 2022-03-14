import { API, setToken } from "@src/API";
import { authState, idState } from "@store/auth";
import { getUserProfile } from "api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

const GoogleLogin = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
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
      const { data } = await API.post(`/user/google/oauth`, {
        token: code,
      });
      setData(data.success);
      if (data.success && data) {
        setToken(data.accessToken);
        setProfile();
      }
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
  }, []);

  return (
    <div>
      <span>{code}</span>
      <br />
      <span>{error}</span>
    </div>
  );
};

export default GoogleLogin;
