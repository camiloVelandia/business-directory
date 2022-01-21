import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import BusinessDetails from "../pages/BusinessDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/business/:id" component={BusinessDetails} />
      </Switch>
    </BrowserRouter>
  );
};


export default Routes;