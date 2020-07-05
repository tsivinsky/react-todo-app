// Import dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import App from "./App";
import NotFoundPage from "./NotFoundPage";

// Import styles
import "./style/style.scss";

// Render App component to the DOM
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
