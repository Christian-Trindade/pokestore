import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  width: 100%;
  padding: 15px 10px 15px 10px;
  box-sizing: border-box;
  max-width: 80rem;
  margin: auto;

  h2 {
    line-height: 1.4;
    font-family: Helvetica, Arial, sans-serif;
    color: rgb(102, 102, 102);
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const Footer = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.footerBg};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.footerTextColor};
  font-family: Helvetica, Arial, sans-serif;
  font-size: small;
  box-sizing: border-box;

  address {
    width: 60%;
  }

  @media only screen and (max-width: 478px) {
    font-size: 0.7rem;
  }
`;
