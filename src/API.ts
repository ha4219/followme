import { authState } from "@store/auth";
import axios from "axios";
import { useRecoilValue } from "recoil";

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
  const data = JSON.parse(localStorage.getItem("recoil-persist") as string);
  // console.log(loggedIn, checkToken());
  try {
    if (data["loggedIn"] && !checkToken()) {
      setToken(data["loggedIn"]);
    }
  } catch (e) {
    console.log(e);
  }

  // console.log(data['loggedIn']);
  console.log("request: ", request);

  return request;
});

API.interceptors.response.use((response) => {
  console.log("response: ", response);

  return response;
});
