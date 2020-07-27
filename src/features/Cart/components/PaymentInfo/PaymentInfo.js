import React from "react";

import { formatCurrency } from "../../../../util/format";

const PaymentInfo = (props) => {
  const { cart, className } = props;

  return (
    <div className={className}>
      <h3>Payment Info</h3>
      <hr />
      <div>
        <div>Sub Total</div>
        <div>{formatCurrency(cart.subTotal)}</div>
        <div>Tax</div>
        <div>{formatCurrency(cart.taxFee)}</div>
        <div>Shipping Charges</div>
        <div>{formatCurrency(cart.shippingFee)}</div>
        <hr />
        <div>Total</div>
        <div>{formatCurrency(cart.grandTotal)}</div>
      </div>
    </div>
  );
};

export default PaymentInfo;
