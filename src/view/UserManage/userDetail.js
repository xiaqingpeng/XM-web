import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Table, Pagination } from "antd";
import { useDispatch, useSelector, useStore } from "react-redux";
import { handleFindUser } from "./redux/action";
const UserDetail = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  console.log(state);
  // 取出仓库中定义的 state
  const userList = useSelector((state) => {
    return state.user.userList;
  });

  return <div>用户详情</div>;
};
export default UserDetail;
