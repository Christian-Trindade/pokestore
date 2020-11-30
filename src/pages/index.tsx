import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// contexts
import { StoreContext } from "../services/contexts";
import { ThemeProvider } from "styled-components";

import Themes from "../themes";

// pages
import Home from "./home";

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
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
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
