import React from "react";

const PaymentInfo = (props) => {
  const { cart, className } = props;

  return (
    <div className={className}>
      <h3>Payment Info</h3>
      <hr />
    </div>
  );
};

export default PaymentInfo;
