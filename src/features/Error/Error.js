import React from "react";

import css from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <div className={css.root}>
      <div className={css.panel} role="alert">
        <h2>Ooops! Something went wrong.</h2>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    </div>
  );
};

export default Error;
