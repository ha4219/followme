import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Naver = () => {
  const router = useRouter();
  const test = async (code) => {
    // const res = await API.get(`/user/naver/oauth/${code}`);
  };
  useEffect(() => {
    try {
      const at = router.asPath.split("#")[1];
    } catch (e) {
      console.log(e, "naver token not");
    }
  }, [router.isReady]);
  return (
    <div>
      <span>1</span>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context);

  // if (window.location.href.includes("access_token")) {
  //   const location = window.location.href.split('=')[1];
  //   const token = location.split('&')[0];
  //   console.log('token', `Bearer ${token}`);
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   }
  //   axios.get('https://openapi.naver.com/v1/nid/me', config)
  //   .then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);

  //   })

  // }
  return {
    props: {},
  };
}

export default Naver;
