import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Root from "./Root";

// All layouts/containers
// import DefaultLayout from '../layouts/Default';
// import VerticalLayout from '../layouts/Vertical';
// import FullLayout from '../layouts/Full';

// const Login = React.lazy(() => import('../pages/Login'));
import LessonPrep from "../pages/LessonPrep.jsx";
import LessonDB from "../pages/LessonDB.jsx";
import LessonCustom from "../pages/LessonCustom.jsx";
import LessonMonitor from "../pages/LessonMonitor.jsx";
import LessonManage from "../pages/LessonManage.jsx";
import ChatHistory from "../pages/ChatHistory.jsx";
import ClassChange from "../pages/ClassChange.jsx";
import Preparing from "../pages/Preparing.jsx";
import Login from "../pages/Login.jsx";

import PrivateRoute from "./privateRoute.js";
import { useSelector } from "react-redux";

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
      // element: <DefaultLayout />,
      children: [
        {
          path: "login",
          element: <LoadComponent component={Login} />,
        },
        // {
        //   path: "error-404",
        //   element: <LoadComponent component={ErrorPageNotFound} />,
        // },
      ],
    },
    {
      path: "/",
      // element: <PrivateRoute roles={'Admin'} component={Layout} />,
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
