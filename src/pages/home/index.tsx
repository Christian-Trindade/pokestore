import React, { useContext } from "react";
import { StoreContext } from "../../services/contexts";

import { Container, Header, SearchBar } from "./components";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Home: React.FC = () => {
  const context = useContext(StoreContext);

  return (
    <Container>
      <Header>
        <div id="start-container">
          <img src="/assets/images/logo.svg" id="logo" />
          <h2 id="title">{context.title}</h2>
        </div>
        <div id="end-container">
          <SearchBar />
          <ShoppingCartOutlinedIcon fontSize="large" />
        </div>
      </Header>
    </Container>
  );
};

export default Home;
