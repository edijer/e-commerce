import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addToCart } from "../../../../stores/cartSlice";
import { createCartInfo } from "../../../../types/cartInfo";
import { currency } from "../../../../util/format";
import css from "./Bag.module.css";
import cartCss from "../../Cart.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: async (bookId) => {
      await dispatch(addToCart({ bookId }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cart: createCartInfo(state.cart.items, state.rate),
  };
};

const Bag = (props) => {
  const { cart, addToCart } = props;

  const handleAddToCart = async (bookId) => {
    await addToCart(bookId);
  };

  const handleRemoveFromCart = (bookId) => {
    console.log(`Removing book id ${bookId} to be implmented next time. :)`);
  };

  return (
    <div>
      <h3>Shopping Bag</h3>
      <div className={css.cartHeader}>Price</div>
      <hr />
      <div>
        {cart.items.map((item) => {
          return (
            <div className={cartCss.row} key={item.book.id}>
              <div className={cartCss.fullWidth}>
                <div className={cartCss.bold}>{item.book.title}</div>
                <div className="text-xs">{`Author: ${item.book.author}`}</div>
                <div className="text-xs">{`ISBN: ${item.book.isbn}`}</div>
                <div className="text-xs">
                  <span className="text-primary">{`Quantity: ${item.quantity}`}</span>
                </div>
                <div className={css.cartItemActionSection}>
                  <div className={css.cartItemAction}>
                    <button
                      className="btn btn-link text-sm"
                      onClick={() => handleAddToCart(item.book.id)}
                    >
                      Add
                    </button>
                  </div>
                  <div
                    className={css.cartItemAction}
                    onClick={() => handleRemoveFromCart(item.book.id)}
                  >
                    <button className="btn btn-link text-sm">Delete</button>
                  </div>
                </div>
              </div>
              <div className={cartCss.bold}>
                <div className="text-primary">{currency(item.book.price)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Bag.propTypes = {
  cart: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
