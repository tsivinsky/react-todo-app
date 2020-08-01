// Import dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App() {
  return (
    <Router>
      <>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </>
    </Router>
  );
}
