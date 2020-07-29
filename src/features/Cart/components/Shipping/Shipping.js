import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import PropTypes from "prop-types";
import validate from "validate.js";

import {
  loadShippingInfo,
  addOrUpdateShippingInfo,
} from "../../../../stores/shippingInfoSlice";
import css from "./Shipping.module.css";
import cartCss from "../../Cart.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    loadShippingInfo: async () => {
      await dispatch(loadShippingInfo());
    },
    addOrUpdateShippingInfo: async (address) => {
      await dispatch(addOrUpdateShippingInfo({ address }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    shippingInfo: state.shippingInfo,
  };
};

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
  addressLine1: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
  city: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
  country: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
  postalCode: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
  phoneNumber: {
    presence: { allowEmpty: false, message: "^Required" },
    length: {
      maximum: 50,
    },
  },
};

const Shipping = (props) => {
  const { shippingInfo, loadShippingInfo, addOrUpdateShippingInfo } = props;

  const [formData, setFormData] = useState({
    isValid: false,
    values: { ...shippingInfo.address },
    errors: {},
  });

  useEffect(() => {
    loadShippingInfo();
  }, [loadShippingInfo]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      values: {
        ...formData.values,
        [target.name]: target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      isValid: true,
      errors: {},
    });

    const errors = validate(formData.values, schema);

    if (errors) {
      setFormData({
        ...formData,
        isValid: true,
        errors: errors,
      });
    } else {
      const address = {
        ...formData.values,
      };

      addOrUpdateShippingInfo(address);
    }
  };

  const hasError = (field) => (formData.errors[field] ? true : false);

  return (
    <div>
      <h3>Shopping Address</h3>
      <div className={css.header}>&nbsp;</div>
      <form className={css.form} noValidate onSubmit={handleSubmit}>
        <div className={css.row}>
          <input
            type="text"
            placeholder="First name"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("firstName"),
            })}
            value={formData.values.firstName || ""}
            name={"firstName"}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("lastName"),
            })}
            value={formData.values.lastName || ""}
            name={"lastName"}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Address Line 1"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("addressLine1"),
            })}
            value={formData.values.addressLine1 || ""}
            name={"addressLine1"}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Address Line 2"
            className={clsx(css.rowItem, css.input)}
            value={formData.values.addressLine2 || ""}
            name={"addressLine2"}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="City"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("city"),
            })}
            value={formData.values.city || ""}
            name={"city"}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <select
            placeholder="Country"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("country"),
            })}
            value={formData.values.country || ""}
            name={"country"}
            onChange={handleChange}
          >
            <option value="">- Select a country -</option>
            <option value="Singapore">Singapore</option>
            <option value="Singapore">Australia</option>
          </select>
          <input
            type="text"
            placeholder="Postal code"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("postalCode"),
            })}
            value={formData.values.postalCode || ""}
            name={"postalCode"}
            onChange={handleChange}
          />
        </div>
        <div className={css.row}>
          <input
            type="text"
            placeholder="Phone number"
            className={clsx(css.rowItem, css.input, {
              [css.inputError]: hasError("phoneNumber"),
            })}
            value={formData.values.phoneNumber || ""}
            name={"phoneNumber"}
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

Shipping.propTypes = {
  shippingInfo: PropTypes.object.isRequired,
  loadShippingInfo: PropTypes.func.isRequired,
  addOrUpdateShippingInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
