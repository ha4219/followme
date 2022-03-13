import { API } from "@src/API";

export const addBanner = async ({ imgURL, urlTo, endTo }) => {
  try {
    const { data } = await API.post("/main/insertSwipers", {
      imgURL: imgURL,
      urlTo: urlTo,
      endTo: endTo,
    });
    console.log(data);
  } catch (e) {
    console.log("add baner ", e);
  }
  return;
};
