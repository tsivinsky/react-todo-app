// Import dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/store";

// Import App component
import App from "./App";

// Import styles
import "./style/style.scss";

// Render App component to the DOM
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
