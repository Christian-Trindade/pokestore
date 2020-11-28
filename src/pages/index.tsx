import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StoreContext } from "../services/contexts";

const StoreType = getStoreType();

function getStoreType(): String {
  let params = window.location.pathname;
  let paramsSplited = params.split("/");
  let type = "";

  if (paramsSplited.length > 1) {
    type = paramsSplited[1] || "fire";
  }

  return type;
}

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const AppContexted: React.FC = () => {
  return (
    <StoreContext.Provider value={StoreType}>
      <App />
    </StoreContext.Provider>
  );
};

// to read contexts
// import {useContext } from "react";
// import { StoreContext } from "../services/contexts";

function Home() {
  const context = useContext(StoreContext);
  return <h2>{context}</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default AppContexted;
