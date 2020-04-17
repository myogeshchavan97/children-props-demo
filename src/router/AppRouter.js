import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import ListPage from "../components/ListPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div className="main">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/list" component={ListPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
