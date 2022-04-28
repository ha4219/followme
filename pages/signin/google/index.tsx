import { LinearProgress } from "@mui/material";
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
      const { data } = await API.post(`/user/google/oauth`, {
        token: code,
      });

      if (data?.success) {
        setData(data.success);
        if (data.success && data) {
          setToken(data.accessToken);
          setLoggedIn(data.accessToken);
          setProfile();
        }
      } else {
        toast.error("해당 계정으로 로그인할 수 없습니다");
        // router.back();
        setTimeout(() => {
          router.back();
        }, 5000);
      }
    } catch (e: any) {
      console.log("send server error", e);
      setError(e.message);
      toast.error("해당 계정으로 로그인할 수 없습니다");
      // router.back();
      setTimeout(() => {
        router.back();
      }, 5000);
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
      <LinearProgress />
    </div>
  );
};

export default GoogleLogin;
