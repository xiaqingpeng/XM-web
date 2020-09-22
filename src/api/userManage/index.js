import request from "../../utils/http";
//查找用户
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
// 删除用户
export const deleteUserList = (params) => {
  console.log(params);
  return request.delete(`/delete_user/${params.user_id}`).then((res) => {
    return res;
  });
};
