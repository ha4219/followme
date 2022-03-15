import { API, setToken } from "@src/API";
import { authState, idState } from "@store/auth";
import { getUserProfile } from "api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

const Naver = () => {
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
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  const test = async (code) => {
    try {
      console.log(code);

      const { data } = await API.get(`/user/naver/oauth/${code}/code`);
      setData(data.success);
      if (data.success && data) {
        setToken(data.accessToken);
        setLoggedIn(data.accessToken);
        setProfile();
      }

      // setLoggedInId(id);
    } catch (e: any) {
      console.log("send server error", e);
      setError(e.message);
    }
  };
  useEffect(() => {
    try {
      const code = router.asPath
        .split("?")[1]
        .split("&")[0]
        .replace("code=", "")
        .replace("&state=", "");
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
      {data}
    </div>
  );
};

export default Naver;
