import { authState, idState } from "@store/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

const Logout = () => {
  const router = useRouter();
  const [, setIsLoggedIn] = useRecoilState(authState);
  const [, setLoggedInId] = useRecoilState(idState);

  useEffect(() => {
    setIsLoggedIn("");
    setLoggedInId("");
    toast.error("토큰 만료");
    router.push("/signin");
  }, [router.isReady]);
  return <div></div>;
};

export default Logout;
