import { API } from "@src/API";
import { IPointType } from "types/apiType";

export const getUserPointHistory = async (id) => {
  try {
    const { data } = await API.post<IPointType[]>("/user/pointHistory", {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("getUserPointHistory", e);
    return [];
  }
};

export const getMyCourseBoard = async ({ id }) => {
  try {
    const { data } = await API.post<any[]>("/user/course/mypost", {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("getmycourse", e);
    return [];
  }
};
