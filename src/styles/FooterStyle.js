import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  width: 375px;
  position: fixed;
  bottom: 0;
  height: 60px;
  background: #f7f7f7;
`;

export const FooterInner = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  & li {
    font-size: 26px;
    .nav-link {
      color: #d9d9d9;
    }
    .nav-link-active {
      color: #b99470;
    }
  }
`;
