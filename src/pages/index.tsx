import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoreContext } from "../services/contexts";
import Themes from "../themes";
import styled, { ThemeProvider } from "styled-components";

const StoreType = getStoreType();

function getStoreType(): string {
  let paramsSplited = window.location.host.split(".");
  let type = paramsSplited[0];

  return type;
}

const App: React.FC = () => {
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

const Body = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.variant1};
`;

function Home() {
  const context = useContext(StoreContext);

  return (
    <Body>
      <h1>Olá voce está na {context.title}</h1>;
    </Body>
  );
}

export default AppContexted;
