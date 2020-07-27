import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

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
  // projection
  return {
    cart: state.cart.items,
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
            <div className={css.cartHeader}>Price</div>
            <hr />
            <div>
              {cart.map((item) => {
                return (
                  <div className={css.cartItemRow} key={item.id}>
                    <div className={css.cartItemText}>
                      <div className={css.cartItemTitle}>{item.book.title}</div>
                      <div
                        className={css.cartItemSubTitle}
                      >{`Author: ${item.book.author}`}</div>
                      <div
                        className={css.cartItemSubTitle}
                      >{`ISBN: ${item.book.isbn}`}</div>
                      <div
                        className={css.cartItemSubTitle}
                      >{`Quantity: ${item.quantity}`}</div>
                      <div className={css.cartItemActionSection}>
                        <div className={css.cartItemAction}>
                          <button className="btn btn-link text-sm">Add</button>
                        </div>
                        <div className={css.cartItemAction}>
                          <button className="btn btn-link text-sm">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={css.cartItemPrice}>
                      <div className="text-primary">{item.book.price}</div>
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
