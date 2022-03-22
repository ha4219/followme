import { API } from "@src/API";

export const addBanner = async ({ imgURL, urlTo, endDate, id }) => {
  try {
    const { data } = await API.post("/main/insertSwipers", {
      imgURL: imgURL,
      urlTo: urlTo,
      endDate: endDate,
      id: id,
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
    const { data } = await API.post(`/board/3/insert`, {
      title: title,
      content: content,
      writer: writer,
      createdAt: createdAt,
      type: 3,
    });
    return data;
  } catch (e) {
    console.log("add notice", e);
  }
};

export const getNotice = async () => {
  try {
    const { data } = await API.post(`/board/3/allPosts`);

    return data;
  } catch (e) {
    console.log("all notcie", e);
    return [];
  }
};

export const getNoticeDetail = async ({ idx }) => {
  try {
    const { data } = await API.get(`/board/3/detail/${idx}`);

    return data;
  } catch (e) {
    console.log("all notcie", e);
    return [];
  }
};

export const delNotice = async ({ idx, id }) => {
  try {
    const { data } = await API.post(`/board/3/delete/${idx}`, {
      writer: id,
    });
    return data;
  } catch (e) {
    console.log("del notice", e);
  }
};

export const getFaq = async () => {
  try {
    const { data } = await API.post(`/board/4/allPosts`);

    return data;
  } catch (e) {
    console.log("all faq", e);
    return [];
  }
};

export const delFaq = async ({ idx, id }) => {
  try {
    const { data } = await API.post(`/board/4/delete/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("del faq", e);
  }
};

export const addFaq = async ({ writer, title, content, createdAt }) => {
  try {
    const { data } = await API.post(`/board/4/insert`, {
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

export const getEditorPickEnalbleList = async ({}) => {
  try {
    const { data } = await API.get(`/main/listsForEditors`, {});
    return data;
  } catch (e) {
    console.log("enbale picks", e);
    return [];
  }
};
