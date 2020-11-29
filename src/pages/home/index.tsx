import React, { useContext } from "react";
import { StoreContext } from "../../services/contexts";

import { Container, Header, SearchBar, Footer, Body } from "./components/ui";
import Logo from "./components/logo";
import ItemsContainer from "./components/itemsContainer";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Home: React.FC = () => {
  const context = useContext(StoreContext);

  return (
    <Container>
      <Header>
        <div id="start-container">
          <Logo />
        </div>
        <div id="end-container">
          <SearchBar
            placeholder="Buscar..."
            id="outlined-search"
            type="search"
            variant="outlined"
          />

          <ShoppingCartOutlinedIcon fontSize="large" />
        </div>
      </Header>
      <Body>
        <h2>Os mais Vendidos!</h2>
        <ItemsContainer />
      </Body>
      <Footer>
        <address>
          PokeStore - Companhia Digital / CNPJ: 00.000.000/0000-00 / Inscrição
          Estadual: 000.000.000.000 / Endereço Rua Pokemon Company, 102 - Pallet{" "}
        </address>
      </Footer>
    </Container>
  );
};

export default Home;
