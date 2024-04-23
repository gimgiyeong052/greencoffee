import React from "react";
import { LayoutInner, LayoutWrap } from "../styles/LayoutStyle";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <LayoutWrap>
      <LayoutInner>
        {location.pathname === "/" ? "" : <Header />}
        <main>
          <Outlet />
        </main>
        <div className="space" />
        {location.pathname === "/login" ? "" : <Footer />}
      </LayoutInner>
    </LayoutWrap>
  );
};

export default Layout;
