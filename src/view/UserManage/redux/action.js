import {
  FIND_USER,
  UPDATE_USER,
  INSERT_USER,
  DELETE_USER,
} from "./actionType.js";
import { getUserList,deleteUserList } from "../../../api/userManage";
export const handleFindUser = (params, callback) => {
  console.log(params);
  return  async(dispatch) => {
    console.log(params);
    let res = await getUserList(params);
    console.log(res);
    callback && callback(res);
    dispatch({
      type: FIND_USER,
      payload: res,
    });
  };
};
export const handleUpdateUser = (params, callback) => {
  console.log(params);
  return  async(dispatch) => {
    console.log(params);
    let res = await getUserList(params);
    console.log(res);
    callback && callback(res);
    dispatch({
      type: UPDATE_USER,
      payload: res,
    });
  };
};
export const handleInsertUser = (params, callback) => {
  console.log(params);
  return  async(dispatch) => {
    console.log(params);
    let res = await getUserList(params);
    console.log(res);
    callback && callback(res);
    dispatch({
      type: INSERT_USER,
      payload: res,
    });
  };
};
export const handleDeleteUser = (params, callback) => {
  console.log(params);
  return  async(dispatch) => {
    console.log(params);
    let res = await deleteUserList(params);
    console.log(res);
    callback && callback(res);
    dispatch({
      type: DELETE_USER,
      payload: res,
    });
  };
};

