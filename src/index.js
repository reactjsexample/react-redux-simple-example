import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import appStore from "./appStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  rootElement
);
