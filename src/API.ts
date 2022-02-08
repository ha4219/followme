import { authState } from "@store/auth";
import axios from "axios";
import { useRecoilValue } from "recoil";

export const API = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  baseURL: "",
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

API.interceptors.request.use((request) => {
  const data = JSON.parse(localStorage.getItem("recoil-persist"));
  // console.log(loggedIn, checkToken());
  console.log(data["loggedIn"], checkToken());

  if (data["loggedIn"] && !checkToken()) {
    setToken(data["loggedIn"]);
  }
  // console.log(data['loggedIn']);

  return request;
});

API.interceptors.response.use((response) => {
  console.log("response: ", response);

  return response;
});
