import React from "react";
import {
  MailOutlined,
} from "@ant-design/icons";
export default [
  {
    key: "index",
    path: "/index",
    title:'主页',
    content: (
      <span>
        <MailOutlined />
        <span>主页</span>
      </span>
    ),
  },
  {
    key: "sub1",
    title: (
      <span>
        <MailOutlined />
        <span>设备管理</span>
      </span>
    ),
    MenuItem: [
      {
        key: "device_version_manage",
        path: "/device_version_manage",
        content: "设备版本管理",
        fatherNode:'设备管理',
      },
      {
        key: "charge_pile_manage",
        path: "charge_pile_manage",
        content: "充电桩管理",
        fatherNode:'设备管理',
      },
      {
        key: "charge_station_manage",
        path: "charge_station_manage",
        content: "充电站管理",
        fatherNode:'设备管理',
      },
    ],
  },

  {
    key: "charge_rule_manage",
    content: (
      <span>
        <MailOutlined />
        <span>收费规则管理</span>
      </span>
    ),
    path:'/charge_rule_manage',
    title:'收费规则管理',
  },
  {
    key: "sub3",
    title: (
      <span>
        <MailOutlined />
        <span>报表管理</span>
      </span>
    ),
    fatherNode:'报表管理',
    MenuItem: [
      {
        key: "income_statements",
        path: "/income_statements",
        content: "收入报表",
        fatherNode:'报表管理',
      },
      {
        key: "use_statements",
        path: "/use_statements",
        content: "使用报表",
        fatherNode:'报表管理',
      },
      {
        key: "divide_statements",
        path: "/divide_statements",
        content: "分成报表",
        fatherNode:'报表管理',
      },
    ],
  },
  {
    key: "user_manage",
    title: (
      <span>
        <MailOutlined />
        <span>用户管理</span>
      </span>
    ),
    fatherNode:'用户管理',
    MenuItem: [
      {
        key: "user_info",
        path: "/user_info",
        content: "用户列表",
        fatherNode:'用户列表',
      }
    ],
  },
  {
    key: "sub5",
    title: (
      <span>
        <MailOutlined />
        <span>合伙人管理</span>
      </span>
    ),
    fatherNode:'合伙人管理',
    MenuItem: [
      {
        key: "partner_list",
        path: "/partner_list",
        content: "合伙人列表",
        fatherNode:'合伙人管理',
      },
      {
        key: "divide_manage",
        path: "/divide_manage",
        content: "分成管理",
        fatherNode:'合伙人管理',
      },
    ],
  },
  {
    key: "sub6",
    title: (
      <span>
        <MailOutlined />
        <span>权限管理</span>
      </span>
    ),
    fatherNode:'权限管理',
    MenuItem: [
      {
        key: "role_manage",
        path: "/role_manage",
        content: "角色管理",
        fatherNode:'权限管理',
      },
    ],
  },
];
