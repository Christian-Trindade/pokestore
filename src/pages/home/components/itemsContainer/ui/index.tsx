import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";

export const PrimaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-width: 80rem;
  margin: auto;
`;

export const Image = styled.img`
  /* max-width: 152px;
  max-height: 152px;

  @media screen and (max-width: 420px) {
    max-width: 112px;
    max-height: 112px;
  } */
`;

export const Name = styled.p`
  font-family: "Flexo-Demi", arial, sans-serif;
  color: ${({ theme }) => theme.productTitle};
  text-transform: none;
  font-size: 1.3em;
  margin: 5px auto auto 5px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  max-width: 140px;
  padding: 0px 3px 0px 3px;

  @media screen and (max-width: 420px) {
    font-size: 1em;
    max-width: 100px;
  }
`;
export const Price = styled.p`
  margin: 10px 0px 3px 0px;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  color: rgb(51, 51, 51);
  font-weight: bold;

  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
`;

export const PriceParcelate = styled.p`
  font-size: 0.8em;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

export const ShowcaseContainer = styled.div`
  align-items: center;
  text-align: center;
  margin: 12px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 18px;
  }
`;

export const ItemsLoading = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
    <ShowcaseContainer>
      <Skeleton variant="rect" width={152} height={200} />
    </ShowcaseContainer>
  ));
};

export const LoadMoreButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const LoadMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
