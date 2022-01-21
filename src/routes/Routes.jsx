import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
// import BusinessDetail  from "../components/dashboard/BusinessDetailScreen";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/business/:id" component={BusinessDetailScreen} /> */}
      </Switch>
    </BrowserRouter>
  );
};


export default Routes;