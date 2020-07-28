import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { currency, longDate } from "../../util/format";
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
  const sortedByDateDesc = Array.from(state.orders.items).sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return {
    orders: sortedByDateDesc,
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
        {orders.map((order) => {
          return (
            <div className={css.panel} key={order.id}>
              <div className={css.panelHeader}>
                <span className="pull-left">{`Order Placed: ${longDate(
                  order.date
                )}`}</span>
                <span className="pull-right">{`Status: ${order.status}`}</span>
              </div>
              <div className={css.panelDetails}>
                <img
                  src={order.book.imageUrl}
                  alt={order.book.title}
                  className={css.bookThumbnail}
                />
                <div className={css.bookDetails}>
                  <span className="text-md">{order.book.title}</span>
                  <span className="text-xs">{`Author: ${order.book.author}`}</span>
                  <span className="text-xs">{`Price: ${currency(
                    order.book.price
                  )}`}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
