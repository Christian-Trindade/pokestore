import React, { useState, useRef } from "react";
import { debounce } from "lodash";

import { SearchContext } from "../../services/contexts";
import { StylesProvider } from "@material-ui/core/styles";

import { Container, Footer, Body } from "./components/ui";
import Header from "../../components/Header";

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
          <Header handleChangeSearch={handleChangeSearch} />
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
