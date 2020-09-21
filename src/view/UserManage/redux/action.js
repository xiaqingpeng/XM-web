import {
  FIND_USER,
  UPDATE_USER,
  INSERT_USER,
  DELETE_USER,
} from "./actionType.js";
import { getUserList } from "../../../api/userManage";
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
