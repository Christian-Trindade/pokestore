import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const AddToCartButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;
