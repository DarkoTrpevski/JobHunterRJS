  
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import NotFound from "../pages/NotFound/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={JobDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default Routes;