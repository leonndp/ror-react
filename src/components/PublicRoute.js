import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../services/auth";

import Drawer from "./Drawer";

const PublicRoute = ({ children, path, exact, restricted }) => {
  return isLoggedIn() && restricted ? (
    <Redirect to="/dashboard" />
  ) : (
    <Route path={path} exact={exact}>
      <>
        <Drawer drawerView="login" />
        {children}
      </>
    </Route>
  );
};

export default PublicRoute;
