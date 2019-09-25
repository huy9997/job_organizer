import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import job_dashboard from "../screens/job_dashboard";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={job_dashboard} />
  </BrowserRouter>
);

export default Routes;
