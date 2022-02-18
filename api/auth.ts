import { API, getPayload, getToken } from "@src/API";
import axios from "axios";

export const getUser = async () => {
  const { memberId } = getPayload();
  console.log(memberId);

  const data = JSON.stringify({
    id: "admin",
  });
  const res = await API.get("/user/profile", {
    data,
  });
  return res;
  // const data = JSON.stringify({
  //   id: "admin",
  // });

  // const config = {
  //   method: "get",
  //   url: "/api/user/profile",
  //   headers: {
  //     "Access-Token":
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJJZCI6ImFkbWluIiwibWVtYmVyUGFzc3dvcmQiOiJhZG1pbjEyMyIsImlhdCI6MTY0NTE4NjE4NiwiZXhwIjoxNjQ1MTg3OTg2fQ.QEAumsSIY8FjWKbtPJ5yDNvE0t33KDnpqSljNCY2KLE",
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};
