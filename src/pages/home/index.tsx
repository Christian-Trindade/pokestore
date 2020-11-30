import React, { useState, useRef } from "react";
import { SearchContext } from "../../services/contexts";

import { debounce } from "lodash";

import { Container, Header, SearchBar, Footer, Body } from "./components/ui";
import Logo from "./components/logo";
import Cart from "./components/cart";
import { StylesProvider } from "@material-ui/core/styles";

import ItemsContainer from "./components/itemsContainer";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    delayedQuery(e.target.value);
  };

  const delayedQuery = useRef(
    debounce((text) => {
      setSearch(text);
    }, 500)
  ).current;

  return (
    <SearchContext.Provider value={search}>
      <StylesProvider injectFirst>
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
                onChange={handleChangeSearch}
              />
              <Cart />
            </div>
          </Header>
          <Body>
            <h2>Os mais Vendidos!</h2>
            <ItemsContainer />
          </Body>
          <Footer>
            <address>
              PokeStore - Companhia Digital / CNPJ: 00.000.000/0000-00 /
              Inscrição Estadual: 000.000.000.000 / Endereço Rua Pokemon
              Company, 102 - Pallet{" "}
            </address>
          </Footer>
        </Container>
      </StylesProvider>
    </SearchContext.Provider>
  );
};

export default Home;
