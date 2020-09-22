import React, { useEffect, useState ,useMemo} from "react";
import { useHistory } from "react-router-dom";
import {
  Table,
  Pagination,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFindUser,
  handleDeleteUser,
  handleInsertUser,
  handleUpdateUser,
} from "./redux/action";
const UserInfo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState({});
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
    } else if (name === "删除") {
      dispatch(
        handleDeleteUser({
          user_id: record.user_id,
        })
      );
    } else if (name === "添加") {
      setVisible(true);
    } else if (name === "编辑") {
      setRecord(record);
      setOpen(true);
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
              width: "200px",
              justifyContent: "space-evenly",
            }}
          >
            <a onClick={() => handClick(record, "查看详情")}>查看详情</a>
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

  const onFinish = (values) => {
    dispatch(
      handleInsertUser(values, (res) => {
        console.log(res);
        setVisible(false);
        message.success("添加成功");
      })
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = (e) => {
    form.submit();
    console.log(form);
  };
  const handleCancel = (e) => {
    setVisible(false);
    setRecord({});
  };
  const onFinishEdit = (values) => {
    dispatch(
      handleUpdateUser({ ...values, user_id: record.user_id }, (res) => {
        console.log(res);
        setOpen(false);
        message.success("修改成功");
      })
    );
  };
  const onFinishFailedEdit = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOkEdit = (e) => {
    form.submit();
    console.log(form);
  };
  const handleCancelEdit = (e) => {
    setOpen(false);
    setRecord({});
  };
  let _record = useMemo(() => {
    return record
  }, [open])
  return (
    <div>
      <Button
        style={{ marginBottom: 20 }}
        type="primary"
        onClick={() => handClick({}, "添加")}
      >
        添加
      </Button>
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
      {visible && (
        <Modal
          title="添加用户信息"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="确定"
          cancelText="取消"
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            form={form}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="user_name"
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="年龄"
              name="age"
              rules={[{ required: true, message: "请输入年龄!" }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="电话号码"
              name="telphone"
              rules={[{ required: true, message: "请输入电话号码!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="户籍地"
              name="origin"
              rules={[{ required: true, message: "请输入户籍地!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="角色"
              name="role"
              rules={[{ required: true, message: "请输入角色!" }]}
            >
              <Select>
                <Select.Option value="boss">boss</Select.Option>
                <Select.Option value="manage">manage</Select.Option>
                <Select.Option value="worker">worker</Select.Option>
                <Select.Option value="hr">hr</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      )}
      {open && (
        <Modal
          title="修改用户信息"
          visible={open}
          onOk={handleOkEdit}
          onCancel={handleCancelEdit}
          okText="确定"
          cancelText="取消"
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            form={form}
            layout="horizontal"
            onFinish={onFinishEdit}
            onFinishFailed={onFinishFailedEdit}
          >
            <Form.Item
              label="用户名"
              name="user_name"
              initialValue={_record.user_name}
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="年龄"
              name="age"
              initialValue={_record.age}
              rules={[{ required: true, message: "请输入年龄!" }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="电话号码"
              name="telphone"
              initialValue={_record.telphone}
              rules={[{ required: true, message: "请输入电话号码!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="户籍地"
              name="origin"
              initialValue={_record.origin}
              rules={[{ required: true, message: "请输入户籍地!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="角色"
              name="role"
              initialValue={_record.role}
              rules={[{ required: true, message: "请输入角色!" }]}
            >
              <Select>
                <Select.Option value="boss">boss</Select.Option>
                <Select.Option value="manage">manage</Select.Option>
                <Select.Option value="worker">worker</Select.Option>
                <Select.Option value="hr">hr</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              initialValue={_record.password}
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};
export default UserInfo;
