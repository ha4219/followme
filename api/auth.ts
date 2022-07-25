import { API, getPayload, getToken } from "@src/API";
import { authState } from "@store/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

export const getUserProfile = async () => {
  const { memberId } = getPayload();
  try {
    const res = await API.post(`/user/profile`, {
      id: memberId,
    });
    return res;
  } catch (e) {
    throw new Error("check jwt");
  }
};

export const getUserProfileById = async ({ id }) => {
  try {
    const { data } = await API.post(`/user/profile`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("get profile err", e);
  }
};

export const getUserBoard = async () => {
  const { memberId } = getPayload();
  const res = await API.get(`/user/board/${memberId}`, {});
  return res;
};

export const doKakaoSignin = async (token: string) => {
  try {
    const res = await API.get("http://3.34.24.103:3000/user/kakao/oauth", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const doFindId = async ({
  name,
  phoneNum,
}: {
  name: string;
  phoneNum: string;
}) => {
  try {
    const { data } = await API.post(`/user/findID`, {
      name,
      phoneNum,
    });
    return data;
  } catch (e) {
    console.log("find id error", e);
    return [];
  }
};

export const doFindPW = async ({
  id,
  phoneNum,
  password,
}: {
  id: string;
  phoneNum: string;
  password: string;
}) => {
  try {
    const { data } = await API.post(`/user/updatePW`, {
      id,
      phoneNum,
      password,
    });
    return data;
  } catch (e) {
    console.log("find password error", e);
    return [];
  }
};
