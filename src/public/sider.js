import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export default [
  {
    key: "sub1",
    title: (
      <span>
        <MailOutlined />
        <span>Navigation One</span>
      </span>
    ),
    path: "/",
    content: "option1",
    ItemGroup: [
      {
        key: "g1",
        title: "Item1",
        MenuItem: [
          {
            key: "1",
            path: "/",
            content: "option1",
          },
          {
            key: "2",
            path: "",
            content: "option2",
          },
        ],
      },
      {
        key: "g2",
        title: "Item2",
        MenuItem: [
          {
            key: "11",
            path: "/",
            content: "option11",
          },
          {
            key: "12",
            path: "",
            content: "option12",
          },
        ],
      },
    ],
  },
  {
    key: "sub2",
    title: (
      <span>
        <MailOutlined />
        <span>Navigation two</span>
      </span>
    ),
    MenuItem: [
      {
        key: "21",
        path: "",
        content: "option21",
      },
      {
        key: "22",
        path: "",
        content: "option22",
      },
      {
        key: "23",
        path: "",
        title: "Submenu",
        MenuItemCopy: true,
        MenuItem: [
          {
            key: "231",
            path: "/",
            content: "option231",
          },
          {
            key: "232",
            path: "",
            content: "option232",
          },
        ],
      },
    ],
  },
  {
    key: "sub3",
    title: (
      <span>
        <MailOutlined />
        <span>Navigation three</span>
      </span>
    ),
    MenuItem: [
      {
        key: "31",
        path: "/",
        content: "option31",
      },
      {
        key: "32",
        path: "/home",
        content: "option32",
      },
      {
        key: "33",
        path: "/welcome",
        content: "option33",
      },
    ],
  },
];
