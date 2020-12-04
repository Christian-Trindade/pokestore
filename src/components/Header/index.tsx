import * as React from "react";
import { useState } from "react";

import Logo from "./components/logo";
import Cart from "./components/cart";
import { Container, SearchBar } from "./ui";

import initialSearchParam from "../../services/search/getSearchParams";

interface HeaderParams {
  handleChangeSearch: Function;
}

const Header: React.FC<HeaderParams> = ({ handleChangeSearch }) => {
  const [textSeacrh, setTextSearch] = useState<string>(initialSearchParam);

  return (
    <Container>
      <div id="start-container">
        <Logo />
      </div>
      <div id="end-container">
        <SearchBar
          placeholder="Buscar..."
          id="outlined-search"
          type="search"
          variant="outlined"
          onChange={(e) => {
            setTextSearch(e.target.value);
            handleChangeSearch(e);
          }}
          value={textSeacrh}
        />

        <Cart />
      </div>
    </Container>
  );
};

export default Header;
