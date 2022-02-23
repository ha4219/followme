import { API, getPayload, getToken } from "@src/API";

export const deleteBoard = async ({ url, id, idx }) => {
  const urlTo = url[0].toUpperCase() + url.slice(1);
  try {
    const { data } = await API.post(`${url}/delete${urlTo}Boards/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
