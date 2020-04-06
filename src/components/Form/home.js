import React from "react";
import { Card, Button } from "antd";
import { useDispatch, useSelector, useStore } from "react-redux";


const HomeList = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  // 取出仓库中定义的 state
  const state = useSelector((state) => {
    return state;
  });
  const { subscribe } = useStore();
  console.log(state);
  const { formList, subList } = state.form;
  console.log(subList);
  subscribe(() => {
    console.log("state 改变了");
  });

  return (
    <div style={{width:'500px',border:'1px solid cyan',margin:20}}>
      <Card title="react-hooks" >
        <p> 账号：{subList && subList.username}</p>
        <p> 密码：{subList && subList.password}</p>
        <Button
          type="primary"
          onClick={() => {
            props.history.go(-1);
          }}
        >
          返回
        </Button>
      </Card>
    </div>
  );
};

export default HomeList;
