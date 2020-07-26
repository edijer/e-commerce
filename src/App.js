import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components";
import { Home, Details, MyOrders, Cart, NotFound } from "./features";
import * as ROUTES from "./Routes";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path={ROUTES.DETAILS} component={Details} />
        <Route path={ROUTES.MY_ORDERS} component={MyOrders} />
        <Route path={ROUTES.CART} component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
