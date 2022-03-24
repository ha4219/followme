import { API } from "@src/API";

export const getEnterprises = async () => {
  try {
    const { data } = await API.get(`/enterprise/enterprises`);
    return data;
  } catch (e) {
    console.log("getEnterprises", e);
  }
};

export const getEnterpriseDetail = async ({ idx: idx }) => {
  try {
    const { data } = await API.get(`/enterprise/${idx}`);
    return data;
  } catch (e) {
    console.log("getEnterpriseDetail", e);
  }
};

export const getEnterpriseMenu = async ({ idx: idx }) => {
  try {
    const { data } = await API.get(`/enterprise/menu/read/${idx}`);
    return data;
  } catch (e) {
    console.log("getEnterpriseDetail", e);
  }
};

export const getEnterpriseReview = async ({ idx: idx }) => {
  try {
    const { data } = await API.get(`/enterprise/review/read/${idx}`);
    return data;
  } catch (e) {
    console.log("getEnterpriseDetail", e);
  }
};

export const insertEnterpriseReview = async ({
  enterId: enterId,
  score: score,
  writer: writer,
  content: content,
}) => {
  try {
    const { data } = await API.post(`/enterprise/review/insert`, {
      enterId,
      score,
      writer,
      content,
    });
    return data;
  } catch (e) {
    console.log("insertEnterprisereview", e);
  }
};

export const delEnterpriseReview = async ({ idx: idx, writer: writer }) => {
  try {
    const { data } = await API.post(`/enterprise/review/delete/${idx}`, {
      writer,
    });
    return data;
  } catch (e) {
    console.log("delEnterpriseReview", e);
  }
};

export const delEnterpriseMenu = async ({ idx: idx, writer: writer }) => {
  try {
    const { data } = await API.post(`/enterprise/menu/delete/${idx}`, {
      enterId: writer,
    });
    return data;
  } catch (e) {
    console.log("delEnterpriseMenu", e);
  }
};

export const insertEnterpriseMenu = async ({
  enterId: enterId,
  name: name,
  explanation: explanation,
  menuImg: menuImg,
}) => {
  try {
    const { data } = await API.post(`/enterprise/menu/insert`, {
      enterId,
      name,
      explanation,
      menuImg,
    });
    return data;
  } catch (e) {
    console.log("insertEnterprisereview", e);
  }
};
