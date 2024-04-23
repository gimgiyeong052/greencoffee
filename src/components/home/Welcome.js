import React from "react";
import { HomeWelcomWrap } from "../../styles/HomeStyle";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  const handleMove = () => {
    navigate("/login");
  };
  return (
    <HomeWelcomWrap>
      <div className="inner">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/coffee.png`} alt="" />
        </div>
        <div>
          <h2>
            Enjoy
            <br /> Your Coffee
          </h2>
          <button onClick={handleMove}>로그인</button>
        </div>
      </div>
    </HomeWelcomWrap>
  );
};

export default Welcome;
