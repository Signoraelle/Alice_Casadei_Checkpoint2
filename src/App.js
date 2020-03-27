import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Context from "./context";

import settings from "./config/settings";
// Import header
import Header from "./components/Header";

const App = () => (
  <Context.Provider
    value={{
      products: settings.products
    }}
  >
    <Router>
      <Header />
    </Router>
  </Context.Provider>
);

export default App;
