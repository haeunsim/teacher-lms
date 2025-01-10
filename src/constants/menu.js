import React from "react";
import Icon from "../components/Icon/Icon";

const MENU_ITEMS = [
  {
    key: "lesson-prep",
    label: "수업 준비",
    url: "/lesson-prep",
    icon: <Icon name="preview" />,
    children: [
      {
        key: "lesson-db",
        label: "수업 DB",
        url: "/lesson-prep/db",
        icon: <Icon name="database" />,
      },
      {
        key: "lesson-custom",
        label: "수업 생성",
        url: "/lesson-prep/custom",
        icon: <Icon name="list" />,
      },
    ],
  },
  {
    key: "monitor",
    label: "수업 모니터링",
    url: "/monitor",
    icon: <Icon name="moniter" />,
  },
  {
    key: "manage",
    label: "학습 관리",
    url: "/manage",
    icon: <Icon name="stack" />,
    children: [
      {
        key: "chat-history",
        label: "채팅 기록",
        url: "/manage/chat-history",
        icon: <Icon name="data" />,
      },
    ],
  },
  {
    key: "class",
    label: "학급 변동 관리",
    url: "/class",
    icon: <Icon name="change" />,
  },
  {
    key: "comingsoon",
    label: "준비중 페이지",
    url: "/comingsoon",
  },
  {
    key: "login",
    label: "로그인 페이지",
    url: "/login",
  },
];

export default MENU_ITEMS;
