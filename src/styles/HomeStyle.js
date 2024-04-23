import styled from "@emotion/styled";

export const HomeWrap = styled.div`
  width: 100%;
  padding: 0 23px;
`;

export const HomeInner = styled.div`
  .home-logo {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;

export const HomeWelcomWrap = styled.div`
  margin-bottom: 20px;
  > .inner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & div {
      :first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 140px;
        background: #f0f0f0;
        border-radius: 50%;
      }
      :last-of-type {
        display: flex;
        flex-direction: column;
        gap: 10px;
        > button {
          width: 110px;
          height: 40px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          margin-left: 15px;
          :hover {
            background: #b99470;
          }
        }
      }
    }
  }
`;

export const HomeSwiperWrap = styled.div`
  > .inner {
    > div {
      :first-of-type {
        margin-bottom: 15px;
        ul {
          display: flex;
          justify-content: space-between;
          li {
            > div {
              :first-of-type {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 70px;
                height: 70px;
                background: #f0f0f0;
                border-radius: 20px;
                margin-bottom: 8px;
                > img {
                  width: 32px;
                  height: 54px;
                }
              }
              :last-of-type {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-weight: 500;
                color: #583732;
              }
            }
          }
        }
      }
      :last-of-type {
        margin-bottom: 15px;
        h3 {
          margin-bottom: 8px;
        }
        > div {
          width: 327px;
          height: 130px;
          border-radius: 20px;
          background: #583732;
        }
      }
    }
  }
`;
export const PopularMenuWrap = styled.div`
  width: 100%;
  > .inner {
    h3 {
      margin-bottom: 8px;
    }
    > ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 17px;
      flex-wrap: wrap;
      & li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        width: 155px;
        height: 168px;
        border-radius: 20px;
        background: #f0f0f0;
        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
`;
