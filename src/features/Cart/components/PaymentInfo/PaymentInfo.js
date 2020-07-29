import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createCartInfo } from "../../../../types/cartInfo";
import { currency } from "../../../../util/format";
import css from "../../Cart.module.css";

const mapStateToProps = (state) => {
  return {
    cart: createCartInfo(state.cart.items, state.rate),
  };
};

const PaymentRow = (props) => {
  const { title, price } = props;
  return (
    <div className={css.row}>
      <div className={css.fullWidth}>{title}</div>
      <div className={css.bold}>
        <span className="text-primary">{currency(price)}</span>
      </div>
    </div>
  );
};

const PaymentInfo = (props) => {
  const { cart, className } = props;

  return (
    <div className={className}>
      <h3>Payment Info</h3>
      <hr />
      <div>
        <PaymentRow title={"Sub Total"} price={cart.subTotal} />
        <PaymentRow title={"Tax"} price={cart.taxFee} />
        <PaymentRow title={"Shipping Charges"} price={cart.shippingFee} />
        <hr />
        <PaymentRow title={"Total"} price={cart.grandTotal} />
      </div>
    </div>
  );
};

PaymentInfo.propTypes = {
  cart: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PaymentInfo);
