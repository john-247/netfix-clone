import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
