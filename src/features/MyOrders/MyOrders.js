import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { setTitle } from "../../stores/currentPageSlice";
import { loadOrders } from "../../stores/orderSlice";
import css from "./MyOrders.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
    loadOrders: (page, limit) => {
      dispatch(loadOrders({ page, limit }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const MyOrders = (props) => {
  const { orders, loadOrders, setTitle, defaultLimit = 20 } = props;
  const [page, setPage] = useState(0);
  const [limit] = useState(defaultLimit);

  useEffect(() => {
    loadOrders(page + 1, limit);
    setTitle("My Orders");

    return function cleanup() {
      setTitle("");
    };
  }, [page, limit, loadOrders, setTitle]);

  return (
    <div className={css.root}>
      <div className={css.main}>
        {orders.items.map((order) => {
          return (
            <div className={css.panel} key={order.id}>
              <div className={css.panelHeader}>
                <span className="pull-left">{`Order Placed: ${moment(
                  order.date
                ).format("D MMMM, YYYY")}`}</span>
                <span className="pull-right">{`Status: ${order.status}`}</span>
              </div>
              <div
                className={css.panelDetails}
              >{`Title: ${order.book.title}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
