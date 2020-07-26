import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components";
import { Home } from "./features";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
