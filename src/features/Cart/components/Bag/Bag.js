import React from "react";

import css from "./Bag.module.css";

const Bag = ({ cart }) => {
  return (
    <div>
      <h3>Shopping Bag</h3>
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
                    <button className="btn btn-link text-sm">Delete</button>
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
  );
};

export default Bag;
