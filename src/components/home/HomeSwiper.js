import React from "react";
import { HomeSwiperWrap } from "../../styles/HomeStyle";

const HomeSwiper = () => {
  const menu = [
    {
      id: "1",
      title: "ALL",
      img: "assets/menu.png",
    },
    {
      id: "2",
      title: "Coffee",
      img: "assets/menu.png",
    },
    {
      id: "3",
      title: "Food",
      img: "assets/menu.png",
    },
    {
      id: "4",
      title: "Shop",
      img: "assets/menu.png",
    },
  ];

  return (
    <HomeSwiperWrap>
      <div className="inner">
        <div>
          <ul>
            {menu.map(item => (
              <li key={item.id}>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" />
                </div>
                <div>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>4월 프로모션</h3>
          <div></div>
        </div>
      </div>
    </HomeSwiperWrap>
  );
};

export default HomeSwiper;
