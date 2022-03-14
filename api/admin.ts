import { API } from "@src/API";

export const addBanner = async ({ imgURL, urlTo, endDate }) => {
  try {
    const { data } = await API.post("/main/insertSwipers", {
      imgURL: imgURL,
      urlTo: urlTo,
      endDate: endDate,
    });
    return data;
  } catch (e) {
    console.log("add baner ", e);
  }
  return;
};
