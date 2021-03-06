import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Context from "./context";

import settings from "./config/settings";
// Import header
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => (
  <Context.Provider
    value={{
      products: settings.products
    }}
  >
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Context.Provider>
);

export default App;
