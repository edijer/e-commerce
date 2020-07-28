import React, { useState } from "react";
import clsx from "clsx";

import css from "./Shipping.module.css";
import cartCss from "../../Cart.module.css";

const Shipping = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    postalCode: "",
    phoneNumber: "",
  });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Shopping Address</h3>
      <div className={css.header}>&nbsp;</div>
      <form className={css.form} noValidate onSubmit={handleSubmit}>
        <div className={css.row}>
          <input
            type="text"
            placeholder="First name"
            className={clsx(css.rowItem, css.input)}
            name={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            className={clsx(css.rowItem, css.input)}
            name={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Address Line 1"
            className={clsx(css.rowItem, css.input)}
            name={formData.addressLine1}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Address Line 2"
            className={clsx(css.rowItem, css.input)}
            name={formData.addressLine2}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="City"
            className={clsx(css.rowItem, css.input)}
            name={formData.city}
            onChange={handleChange}
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
            name={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Phone number"
            className={clsx(css.rowItem, css.input)}
            name={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="submit"
            value="Update"
            className={clsx("btn btn-primary", cartCss.actionButton)}
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
