import { API } from "@src/API";

export const doThemeLike = async ({ idx, id }) => {
  try {
    const { data } = await API.post(`/theme/postLike/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("theme like error", e);
  }
};

export const doRecommendLike = async ({ idx, id }) => {
  try {
    const { data } = await API.post(`/recommend/postLike/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("theme like error", e);
  }
};
