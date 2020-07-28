import React from "react";
import clsx from "clsx";

import css from "./Shipping.module.css";
import cartCss from "../../Cart.module.css";

const Shipping = () => {
  return (
    <div>
      <h3>Shopping Address</h3>
      <div className={css.header}>&nbsp;</div>
      <form className={css.form}>
        <div className={css.row}>
          <input
            type="text"
            placeholder="First name"
            className={clsx(css.rowItem, css.input)}
          />
          <input
            type="text"
            placeholder="Last name"
            className={clsx(css.rowItem, css.input)}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Address"
            className={clsx(css.rowItem, css.input)}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Unit number"
            className={clsx(css.rowItem, css.input)}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="City"
            className={clsx(css.rowItem, css.input)}
          />
        </div>
        <div className={css.row}>
          <select
            placeholder="Country"
            className={clsx(css.rowItem, css.input)}
          >
            <option>Singapore</option>
          </select>
          <input
            type="text"
            placeholder="Postal code"
            className={clsx(css.rowItem, css.input)}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Phone number"
            className={clsx(css.rowItem, css.input)}
          />
        </div>
        <div className={css.row}>
          <button className={clsx("btn btn-primary", cartCss.actionButton)}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
