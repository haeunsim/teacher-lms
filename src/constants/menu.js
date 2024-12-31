import React from "react";
import LessonIcon from "../components/Icon/LessonIcon";
import LessonDBIcon from "../components/Icon/LessonDBIcon";
import LessonCustomIcon from "../components/Icon/LessonCustomIcon";
import MonitorIcon from "../components/Icon/MonitorIcon";
import ManageIcon from "../components/Icon/ManageIcon";
import ClassIcon from "../components/Icon/ClassIcon";
import ChatIcon from "../components/Icon/ChatIcon";

const MENU_ITEMS = [
  {
    key: "lesson-prep",
    label: "수업 준비",
    url: "/lesson-prep",
    icon: <LessonIcon />,
    children: [
      {
        key: "lesson-db",
        label: "수업 DB",
        url: "/lesson-prep/db",
        icon: <LessonDBIcon />,
      },
      {
        key: "lesson-custom",
        label: "수업 생성",
        url: "/lesson-prep/custom",
        icon: <LessonCustomIcon />,
      },
    ],
  },
  {
    key: "monitor",
    label: "수업 모니터링",
    url: "/monitor",
    icon: <MonitorIcon />,
  },
  {
    key: "manage",
    label: "학습 관리",
    url: "/manage",
    icon: <ManageIcon />,
    children: [
      {
        key: "chat-history",
        label: "채팅 기록",
        url: "/manage/chat-history",
        icon: <ChatIcon />,
      },
    ],
  },
  {
    key: "class",
    label: "학급 변동 관리",
    url: "/class",
    icon: <ClassIcon />,
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
