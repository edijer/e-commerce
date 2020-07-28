import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";

import { setTitle } from "../../stores/currentPageSlice";
import { addToCart } from "../../stores/cartSlice";
import { createCartInfo } from "../../types/cartInfo";
import { Bag, PaymentInfo } from "./components";
import * as ROUTES from "../../Routes";
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
  const { history, cart, setTitle, addToCart } = props;

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

  const handleCancel = () => {
    history.push(ROUTES.HOME);
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
            <div className={css.row}>
              <button className={clsx("btn btn-primary", css.actionButton)}>
                Checkout
              </button>
              <button
                className={clsx("btn btn-primary", css.actionButton)}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  history: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Cart);
