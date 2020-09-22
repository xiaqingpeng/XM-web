import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Table, Pagination } from "antd";
import { useDispatch, useSelector, useStore } from "react-redux";
import { handleFindUser, handleDeleteUser } from "./redux/action";
const UserInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  // 取出仓库中定义的 state
  const userList = useSelector((state) => {
    return state.user.userList;
  });
  const onShowSizeChange = (current, pagesize) => {
    setOffset(current - 1);
    setLimit(pagesize);
  };
  const handClick = (record, name) => {
    console.log(record, name);
    if (name === "查看详情") {
      history.push("/user_detail", record);
    } else if ((name = "删除")) {
      dispatch(
        handleDeleteUser({
          user_id: record.user_id,
        })
      );
    }
  };
  const columns = [
    {
      title: "用户名称",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "电话号码",
      dataIndex: "telphone",
      key: "telphone",
    },
    {
      title: "住址",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div
            style={{
              display: "flex",
              width: "300px",
              justifyContent: "space-evenly",
            }}
          >
            <a onClick={() => handClick(record, "查看详情")}>查看详情</a>
            <a onClick={() => handClick(record, "新增")}>新增</a>
            <a onClick={() => handClick(record, "编辑")}>编辑</a>
            <a onClick={() => handClick(record, "删除")}>删除</a>
          </div>
        );
      },
    },
  ];
  const onFresh = () => {
    dispatch(
      handleFindUser({ offset, limit }, (res) => {
        console.log(res);
      })
    );
  };
  useEffect(() => {
    console.log(offset);
    onFresh();
  }, [offset, limit]);

  return (
    <div>
      <Table
        dataSource={(userList && userList.data) || []}
        pagination={false}
        rowKey="user_id"
        columns={columns}
      />
      <Pagination
        style={{ textAlign: "right", marginTop: "20px" }}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        onChange={onShowSizeChange}
        pageSize={limit}
        current={offset + 1}
        showTotal={(total) => `共${total}条`}
        defaultCurrent={1}
        total={(userList && userList.total - 0) || 0}
        defaultPageSize={10}
        pageSizeOptions={["10", "20", "30"]}
      />
    </div>
  );
};
export default UserInfo;
