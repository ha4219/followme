import { ApiOutlined } from "@mui/icons-material";
import axios from "axios";

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

API.interceptors.request.use((request) => {
  console.log("request: ", request);

  return request;
});

API.interceptors.response.use((response) => {
  console.log("response: ", response);

  return response;
});
