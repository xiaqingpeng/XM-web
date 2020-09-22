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
//新增用户
export const insertUserList = (params) => {
  console.log(params);
  return request
    .post("/insert_user",params)
    .then((res) => {
      return res;
    });
};
//修改用户信息
export const updateUserList = (params) => {
  console.log(params);
  return request
    .put(`/update_user`,params)
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
