import { API } from "@src/API";

export const getEnterprises = async () => {
  try {
    const { data } = await API.get(`/enterprise/enterprises`);
  } catch (e) {
    console.log("getEnterprises", e);
  }
};
