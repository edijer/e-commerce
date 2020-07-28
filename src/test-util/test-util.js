import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render as reactRender } from "@testing-library/react";

import { store } from "../stores";

export const render = (ui) => {
  const Wrapper = ({ children }) => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };
  return reactRender(ui, { wrapper: Wrapper });
};
