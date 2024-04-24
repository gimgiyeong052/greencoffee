import React from "react";
import Welcome from "../components/home/Welcome";
import HomeSwiper from "../components/home/HomeSwiper";
import PopularMenu from "../components/home/PopularMenu";
import { HomeInner, HomeWrap } from "../styles/HomeStyle";

const Home = () => {
  return (
    <HomeWrap>
      <HomeInner>
        <div className="home-logo">로고자리</div>
        <Welcome />
        <HomeSwiper />
        <PopularMenu />
      </HomeInner>
    </HomeWrap>
  );
};

export default Home;
