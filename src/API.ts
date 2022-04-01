import { tokenState } from "@store/auth";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const router = useRouter();
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [isToken, setIsToken] = useRecoilState(tokenState);
export const API = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  baseURL: "/api",
});

export const setToken = (token: string) => {
  API.defaults.headers.common["Access-Token"] = `${token}`;
};

export const checkToken = () => {
  return API.defaults.headers.common["Access-Token"] ? true : false;
};

export const resetToken = () => {
  API.defaults.headers.common["Access-Token"] = "";
};

export const getToken = () => API.defaults.headers.common["Access-Token"];

export const getPayload = () => {
  const token = API.defaults.headers.common["Access-Token"] as string;
  const base64Url = token.split(".")[1];
  return JSON.parse(atob(base64Url));
};

API.interceptors.request.use((request) => {
  // try {

  // }
  // const data = JSON.parse(localStorage.getItem("recoil-persist") as string);
  // if (data["loggedIn"] && request) {
  //   request.headers!["Access-Token"] = data["loggedIn"];
  // }
  // // console.log(loggedIn, checkToken());
  // try {
  //   if (data["loggedIn"] && !checkToken()) {
  //     setToken(data["loggedIn"]);
  //   }
  // } catch (e) {
  //   console.log(e);
  // }

  // console.log(data['loggedIn']);
  console.log("request: ", request);

  return request;
});

API.interceptors.response.use(
  (response) => {
    console.log("response: ", response);
    return response;
  }
  // (err) => {
  //   if (err.response.status === 403) {
  //     setIsToken(false);
  //   }
  // }
);
