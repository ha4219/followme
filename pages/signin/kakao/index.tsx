import { LinearProgress } from "@mui/material";
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
      setLoggedInId(data.userData[0].id);
      setTimeout(() => {
        setLoggedIn("");
        setLoggedInId("");
        setToken("");
        router.push("/logout");
      }, 30 * 60 * 1000); // 30 * 60 * 1000
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  const test = async (code) => {
    try {
      const { data } = await API.get(`/user/kakao/oauth/${code}`);
      console.log(data);

      if (data.data === "success") {
        setData(data.success);
        if (data.success && data) {
          setToken(data.accessToken);
          setLoggedIn(data.accessToken);
          setProfile();
        }
      } else {
        toast.error("해당 계정으로 로그인할 수 없습니다");
        // router.back();
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
  }, []);
  return (
    <div>
      <LinearProgress />
    </div>
  );
};

export default KakaoLogin;
