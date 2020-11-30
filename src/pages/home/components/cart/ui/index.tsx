import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* 
  @media screen and (orientation: portrait) {
    width: 30%;
  }

  @media screen and (orientation: landscape) {
    width: 100%;
  } */
`;

export const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

export const Name = styled.p`
  font-family: "Flexo-Demi", arial, sans-serif;
  color: ${({ theme }) => theme.productTitle};
  text-transform: none;
  font-size: 0.9em;
  margin: 5px auto auto 5px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  max-width: 140px;
  padding: 0px 3px 0px 3px;
`;
export const Price = styled.p`
  margin: 10px 0px 3px 0px;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  color: rgb(51, 51, 51);
  font-weight: bold;
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 12px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 18px;
  }
`;

export const BuyButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  margin-bottom: 10px;
  margin-top: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

export const SuccessModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 500px;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  h3 {
    margin-bottom: 10px;
  }
`;
