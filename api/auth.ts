import { API, getPayload, getToken } from "@src/API";
import { authState } from "@store/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

export const getUserProfile = async () => {
  const { memberId } = getPayload();

  const res = await API.post(`/user/profile`, {
    id: memberId,
  });
  return res;
};

export const getUserBoard = async () => {
  const { memberId } = getPayload();
  const res = await API.get(`/user/board/${memberId}`, {});
  return res;
};
