import * as React from "react";
import { FC } from "react";

import styled from "styled-components";

export const FooterContainer = styled.div`
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

const Footer: FC = () => (
  <FooterContainer>
    <address>
      PokeStore - Companhia Digital / CNPJ: 00.000.000/0000-00 / Inscrição
      Estadual: 000.000.000.000 / Endereço Rua Pokemon Company, 102 - Pallet{" "}
    </address>
  </FooterContainer>
);

export default Footer;
