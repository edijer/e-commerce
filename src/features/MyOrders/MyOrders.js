import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { currency, longDate } from "../../util/format";
import { setTitle } from "../../stores/currentPageSlice";
import { loadOrders } from "../../stores/orderSlice";
import * as ROUTES from "../../Routes";
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
    orders: { totalCount: state.orders.totalCount, items: sortedByDateDesc },
  };
};

const MyOrders = (props) => {
  const { orders, loadOrders, setTitle, limit = 5 } = props;
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadOrders(page + 1, limit);
    setTitle("My Orders");

    return function cleanup() {
      setTitle("");
    };
  }, [page, limit, loadOrders, setTitle]);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.root}>
      <div className={css.main}>
        {orders.items.map((order) => {
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
                  <Link
                    to={{
                      pathname: ROUTES.DETAILS,
                      state: {
                        book: order.book,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="text-md">{order.book.title}</span>
                  </Link>
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
      {orders.totalCount !== orders.items.length && (
        <div className={css.actionSection}>
          <button className="btn btn-link text-sm" onClick={handleShowMore}>
            {`Show More (${orders.items.length} of ${orders.totalCount})`}
          </button>
        </div>
      )}
    </div>
  );
};

MyOrders.propTypes = {
  orders: PropTypes.object.isRequired,
  loadOrders: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  limit: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
