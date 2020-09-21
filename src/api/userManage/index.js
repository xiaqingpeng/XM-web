import request from "../../utils/http";
export const getUserList = (params) => {
  console.log(params);
  return request
    .get("/find_user", {
      params,
    })
    .then((res) => {
      return res;
    });
};
