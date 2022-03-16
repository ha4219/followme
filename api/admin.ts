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

export const addNotice = async ({ writer, title, content, createdAt }) => {
  try {
    const { data } = await API.post(`/notice/insert`, {
      title: title,
      content: content,
      writer: writer,
      createdAt: createdAt,
    });
    return data;
  } catch (e) {
    console.log("add notice", e);
  }
};

export const getNotice = async () => {
  try {
    const { data } = await API.get(`/notice/all`);

    return data;
  } catch (e) {
    console.log("all notcie", e);
    return [];
  }
};

export const delNotice = async ({ idx, id }) => {
  try {
    const { data } = await API.post(`/notice/delete/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("del notice", e);
  }
};

export const getFaq = async () => {
  try {
    const { data } = await API.get(`/faq/all`);

    return data;
  } catch (e) {
    console.log("all faq", e);
    return [];
  }
};

export const delFaq = async ({ idx, id }) => {
  try {
    const { data } = await API.post(`/faq/delete/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("del notice", e);
  }
};

export const addFaq = async ({ writer, title, content, createdAt }) => {
  try {
    const { data } = await API.post(`/faq/insert`, {
      title: title,
      answer: content,
      writer: writer,
      createdAt: createdAt,
    });
    return data;
  } catch (e) {
    console.log("add faq", e);
  }
};
