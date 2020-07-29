import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";

import { setTitle } from "../../stores/currentPageSlice";

import { Bag, PaymentInfo, Shipping } from "./components";
import * as ROUTES from "../../Routes";
import css from "./Cart.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
  };
};

const Cart = (props) => {
  const { history, setTitle } = props;

  useEffect(() => {
    setTitle("Cart");

    return function cleanup() {
      setTitle("");
    };
  }, [setTitle]);

  const handleCancel = () => {
    history.push(ROUTES.HOME);
  };

  const handleCheckout = () => {
    console.log("To be implemented next time.");
  };

  return (
    <div>
      <div className={css.root}>
        <div className={css.main}>
          <div>
            <Shipping />
          </div>
          <div>
            <Bag />
            <PaymentInfo className={css.paymentInfo} />
            <div className={css.row}>
              <button
                className={clsx("btn btn-primary", css.actionButton)}
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button
                className={clsx("btn btn-primary", css.actionButton)}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  history: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default compose(connect(null, mapDispatchToProps), withRouter)(Cart);
