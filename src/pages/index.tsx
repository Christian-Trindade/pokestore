import React, { useEffect, useContext } from "react";
import { Router, Switch, Route } from "react-router-dom";

// contexts
import history from "../services/History";
import { StoreContext } from "../services/contexts";
import { ThemeProvider } from "styled-components";

// pages
import Home from "./Home";
import ProductDetails from "./ProductDetails";

import Themes from "../themes";

const StoreType = getStoreType();

function getStoreType(): string {
  let paramsSplited = window.location.host.split(".");
  let type = paramsSplited[0];

  return type;
}

const App: React.FC = () => {
  const context = useContext(StoreContext);

  useEffect(() => {
    document.title = context.title;
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={() => <Home />} exact={true} />
        <Route
          path="/product/:productId"
          render={() => <ProductDetails />}
          exact={true}
        />
      </Switch>
    </Router>
  );
};

const AppContexted: React.FC = () => {
  return (
    <StoreContext.Provider value={Themes[StoreType].data}>
      <ThemeProvider theme={Themes[StoreType].pallet}>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

export default AppContexted;
