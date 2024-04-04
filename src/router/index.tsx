// import Home from '@/views/home'
// import About from "@/views/about";

import { Navigate } from 'react-router-dom';
import React, { lazy } from 'react'; // 懒加载模式，需要添加loading

const About = lazy(() => import("@/views/about"));
const Home = lazy(() => import("@/views/home"));
const Page1 = lazy(() => import("@/views/page1"));
const Page2 = lazy(() => import("@/views/page2"));

const getLoading = (comp: JSX.Element) => <React.Suspense fallback={<div>loading</div>}>{comp}</React.Suspense>;

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: getLoading(<Page1 />),
      },
      {
        path: "/page2",
        element: getLoading(<Page2 />),
      },
    ],
  },
  {
    path: "/about",
    element: getLoading(<About />),
  },
];

export default routes
