import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Navbar } from "./components";
import { Home, Details, MyOrders, Cart, NotFound, Error } from "./features";
import * as ROUTES from "./Routes";
import { loadCart } from "./stores/cartSlice";
import { loadRates } from "./stores/rateSlice";
import "./App.css";

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: () => {
      dispatch(loadCart());
    },
    loadRates: () => {
      dispatch(loadRates());
    },
  };
};

function App({ loadCart, loadRates }) {
  useEffect(() => {
    loadCart();
    loadRates();
  }, [loadCart, loadRates]);

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Navbar />
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path={ROUTES.DETAILS} component={Details} />
        <Route path={ROUTES.MY_ORDERS} component={MyOrders} />
        <Route path={ROUTES.CART} component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

export default connect(null, mapDispatchToProps)(App);
