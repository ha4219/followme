import { API, getPayload, getToken } from "@src/API";
import axios from "axios";

export const getUserProfile = async () => {
  const { memberId } = getPayload();
  const res = await API.get(`/user/profile/${memberId}`, {});
  return res;
};

export const getUserBoard = async () => {
  const { memberId } = getPayload();
  const res = await API.get(`/user/board/${memberId}`, {});
  return res;
};
