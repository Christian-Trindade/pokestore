import styled from "styled-components";

export const PrimaryContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 80rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 80rem;

  @media screen and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const ThirdContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
`;

export const ProductName = styled.div`
  font-family: "Flexo-Medium", arial, sans-serif;
  color: ${({ theme }) => theme.productTitle};
  float: left;
  font-size: 2.25rem;
  text-align: center;
  margin: 10px 0px 10px 0px;
`;

export const ProductImage = styled.img`
  background-color: ${({ theme }) => theme.cleanGray};
  margin-right: 15px;
`;

export const Price = styled.p`
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-size: 2.25rem;
  margin: auto;
`;

export const PriceParcelate = styled.p`
  font-size: 1em;
  margin: auto;
  margin-bottom: 10px;
`;

export const StatusContainer = styled.div`
  width: 280px;
  height: 200px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  margin: 10px 0px 10px 0px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StatusTitle = styled.div`
  color: #ffffff;
  font-family: "Flexo-Medium", arial, sans-serif;
  float: left;
  font-size: 1.1rem;
`;

export const StatusValue = styled.div`
  color: #ffffff;
  font-family: "Flexo-Medium", arial, sans-serif;
  float: left;
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: bold;
`;
