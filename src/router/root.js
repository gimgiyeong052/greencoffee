import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../pages/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const MenuCart = lazy(() => import("../pages/MenuCart"));
const MenuDetail = lazy(() => import("../pages/MenuDetail"));
const MyPage = lazy(() => import("../pages/MyPage"));
const Order = lazy(() => import("../pages/Order"));
const OrderList = lazy(() => import("../pages/OrderList"));
const OrderStatus = lazy(() => import("../pages/OrderStatus"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Payment = lazy(() => import("../pages/Payment"));
const Resign = lazy(() => import("../pages/Resign"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Terms = lazy(() => import("../pages/Terms"));
const UserInfo = lazy(() => import("../pages/UserInfo"));
const NotFound = lazy(() => import("../pages/NotFound"));

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <MenuCart /> },
      { path: "menudetail", element: <MenuDetail /> },
      { path: "mypage", element: <MyPage /> },
      { path: "order", element: <Order /> },
      { path: "orderlist", element: <OrderList /> },
      { path: "orderstatus", element: <OrderStatus /> },
      { path: "favorite", element: <Favorite /> },
      { path: "payment", element: <Payment /> },
      { path: "resign", element: <Resign /> },
      { path: "signup", element: <SignUp /> },
      { path: "terms", element: <Terms /> },
      { path: "userinfo", element: <UserInfo /> },
    ],
  },
]);

export default rootRouter;
