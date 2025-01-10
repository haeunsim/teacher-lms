import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Root from "./Root";
import PrivateRoute from "./privateRoute.js";
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";

const Login = React.lazy(() => import("../pages/Login.jsx"));
const LessonPrep = React.lazy(() => import("../pages/LessonPrep.jsx"));
const LessonDB = React.lazy(() => import("../pages/LessonDB.jsx"));
const LessonCustom = React.lazy(() => import("../pages/LessonCustom.jsx"));
const LessonMonitor = React.lazy(() => import("../pages/LessonMonitor.jsx"));
const LessonManage = React.lazy(() => import("../pages/LessonManage.jsx"));
const ChatHistory = React.lazy(() => import("../pages/ChatHistory.jsx"));
const ClassChange = React.lazy(() => import("../pages/ClassChange.jsx"));
const Preparing = React.lazy(() => import("../pages/Preparing.jsx"));

const loading = () => <div className=""></div>;

const LoadComponent = ({ component: Component }) => (
  <Suspense fallback={loading()}>
    <Component />
  </Suspense>
);

const AllRoutes = () => {

  return useRoutes([
    { path: "/", element: <Root /> },
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "login",
          element: <LoadComponent component={Login} />,
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute component={VerticalLayout} />,
      // PrivateRoute 는 로그인해야만 진입할 수 있는 페이지들, sidebar가 있는 레이아웃
      children: [
        {
          path: "lesson-prep",
          children: [
            {
              path: "",
              element: <LoadComponent component={LessonPrep} />,
            },
            {
              path: "db",
              element: <LoadComponent component={LessonDB} />,
            },
            {
              path: "custom",
              element: <LoadComponent component={LessonCustom} />,
            },
          ],
        },
        {
          path: "monitor",
          element: <LoadComponent component={LessonMonitor} />,
        },
        {
          path: "manage",
          children: [
            {
              path: "",
              element: <LoadComponent component={LessonManage} />,
            },
            {
              path: "chat-history",
              element: <LoadComponent component={ChatHistory} />,
            },
          ],
        },
        {
          path: "class",
          element: <LoadComponent component={ClassChange} />,
        },
        {
          path: "comingsoon",
          element: <LoadComponent component={Preparing} />,
        },
      ],
    },
  ]);
};

export { AllRoutes };
