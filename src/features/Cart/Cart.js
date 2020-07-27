import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setTitle } from "../../stores/currentPageSlice";
import { createCartInfo } from "../../types/cartInfo";
import { Bag, PaymentInfo } from "./components";
import css from "./Cart.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
  };
};

const mapStateToProps = (state) => {
  // projection
  return {
    cart: createCartInfo(state.cart.items, state.rate),
  };
};

const Cart = (props) => {
  const { cart, setTitle } = props;

  useEffect(() => {
    setTitle("Cart");

    return function cleanup() {
      setTitle("");
    };
  }, [setTitle]);

  return (
    <div>
      <div className={css.root}>
        <div className={css.main}>
          <div className={css.billing}>
            <h3>Shipping Address</h3>
          </div>
          <div>
            <Bag cart={cart} />
            <PaymentInfo cart={cart} className={css.paymentInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
