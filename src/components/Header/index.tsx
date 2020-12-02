import React from "react";

import Logo from "./components/logo";
import Cart from "./components/cart";
import { Container, SearchBar } from "./ui";

interface HeaderParams {
  handleChangeSearch: Function;
}

const Header: React.FC<HeaderParams> = ({ handleChangeSearch }) => {
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
          onChange={(e) => handleChangeSearch(e)}
        />

        <Cart />
      </div>
    </Container>
  );
};

export default Header;
