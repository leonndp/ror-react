import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../services/auth";

import Drawer from "./Drawer";

const PrivateRoute = ({ children, path, exact }) => {
  return isLoggedIn() ? (
    <Route path={path} exact={exact}>
      <>
        <Drawer />
        {children}
      </>
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
