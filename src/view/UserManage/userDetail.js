import React, { useEffect } from "react";
import { useParams, useLocation ,useHistory} from "react-router-dom";
import { Table, Pagination } from "antd";
import { useDispatch, useSelector, useStore } from "react-redux";
import { handleFindUser } from "./redux/action";
import { Card, Row, Col, Button } from "antd";
import Icon from "antd/lib/icon";
const UserDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();

  console.log(state);
  // 取出仓库中定义的 state
  const userList = useSelector((state) => {
    return state.user.userList;
  });

  return (
    <div>
      <Button type="primary"  style={{marginBottom:20}} onClick={() => {
        history.go(-1)
      }}>
        <i
          className="icon iconfont icon-fanhui"
          style={{ marginRight: 5, fontSize: 12, color: "white" }}
        ></i>
        返回
      </Button>
      <Card title="用户详细信息">
        <Row>
          <Col span={12}>
            <div>
              <p>ID:{state.user_id}</p>
              <p>名称:{state.user_name}</p>
              <p>电话号码:{state.telphone}</p>
              <p>户籍:{state.origin}</p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <p>年龄:{state.age}</p>
              <p>角色:{state.role}</p>
              <p>密码:{state.password}</p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default UserDetail;
