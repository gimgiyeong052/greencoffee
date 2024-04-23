import React from "react";
import { HeaderWrap } from "../styles/HeaderStyle";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const headerList = {
    login: "로그인",
    cart: "장바구니",
    menudetail: "메뉴상세",
    mypage: "마이페이지",
    order: "주문",
    orderlist: "주문내역",
    orderstatus: "주문현황",
    favorite: "즐겨찾기",
    payment: "결제하기",
    resign: "회원탈퇴",
    signup: "회원가입",
    terms: "약관동의",
    userinfo: "정보수정",
  };

  const headerTitle = headerList[pathName] || "";

  return (
    <HeaderWrap>
      <div>난 헤더:{headerTitle}</div>
    </HeaderWrap>
  );
};

export default Header;
