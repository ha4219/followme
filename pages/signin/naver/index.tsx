import axios from "axios";
import { useEffect } from "react";

const Naver = () => {
  const naverGetData = () => {
    if (window.location.href.includes("access_token")) {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      console.log("token", `Bearer ${token}`);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get("https://openapi.naver.com/v1/nid/me", config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    naverGetData();
  }, []);
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
