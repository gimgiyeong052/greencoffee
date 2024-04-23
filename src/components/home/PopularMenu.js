import React from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";

const PopularMenu = () => {
  const menuData = [
    {
      pk: "1",
      title: "캬라멜 마끼야토",
      img: "assets/menu.png",
      price: "6,500원",
    },
    {
      pk: "1",
      title: "카푸치노 라떼",
      img: "assets/menu.png",
      price: "5,500원",
    },
    {
      pk: "1",
      title: "프라푸치노",
      img: "assets/menu.png",
      price: "6,000원",
    },
    {
      pk: "1",
      title: "에스프레소",
      img: "assets/menu.png",
      price: "5,000원",
    },
  ];

  return (
    <PopularMenuWrap>
      <div className="inner">
        <h3>인기메뉴</h3>
        <ul>
          {menuData.map(item => (
            <li key={item.pk}>
              <div>
                <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" />
              </div>
              <div className="text">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PopularMenuWrap>
  );
};

export default PopularMenu;
