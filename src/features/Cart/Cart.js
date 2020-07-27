import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setTitle } from "../../stores/currentPageSlice";
import { addToCart } from "../../stores/cartSlice";
import { createCartInfo } from "../../types/cartInfo";
import { Bag, PaymentInfo } from "./components";
import css from "./Cart.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
    addToCart: async (bookId) => {
      await dispatch(addToCart({ bookId }));
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
  const { cart, setTitle, addToCart } = props;

  useEffect(() => {
    setTitle("Cart");

    return function cleanup() {
      setTitle("");
    };
  }, [setTitle]);

  const handleAddToCart = async (bookId) => {
    await addToCart(bookId);
  };

  const handleRemoveFromCart = (bookId) => {
    console.log(" To be implmented :)");
  };

  return (
    <div>
      <div className={css.root}>
        <div className={css.main}>
          <div className={css.billing}>
            <h3>Shipping Address</h3>
          </div>
          <div>
            <Bag
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <PaymentInfo cart={cart} className={css.paymentInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
