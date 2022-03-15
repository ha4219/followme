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

export const delBanner = async ({ idx }) => {
  try {
    const { data } = await API.post(`/main/deleteSwipers/${idx}`);
    return data;
  } catch (e) {
    console.log("del banner", e);
  }
};

export const addNotice = async ({ id, title, content, createdAt }) => {
  try {
    const { data } = await API.post(`/admin/notice/insert`, {
      title: title,
      content: content,
      writer: id,
      createdAt: createdAt,
    });
    return data;
  } catch (e) {
    console.log("add notice", e);
  }
};
