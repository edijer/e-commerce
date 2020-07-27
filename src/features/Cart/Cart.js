import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setTitle } from "../../stores/currentPageSlice";
import css from "./Cart.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
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
            <div>Shipping Address</div>
          </div>
          <div>
            <div>Shopping Bag</div>
            <div>Price</div>
            <hr />
            <div>
              {cart.items.map((book) => {
                return (
                  <div className={css.cartItemRow} key={book.id}>
                    <div className={css.cartItemText}>
                      <div className={css.cartItemTitle}>{book.title}</div>
                      <div
                        className={css.cartItemSubTitle}
                      >{`Author: ${book.author}`}</div>
                      <div
                        className={css.cartItemSubTitle}
                      >{`ISBN: ${book.isbn}`}</div>
                    </div>
                    <div className={css.cartItemPrice}>
                      <div className="text-primary">{book.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
