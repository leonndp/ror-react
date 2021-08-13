import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ThemeProvider from "./components/ThemeProvider";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import Register from "./routes/Register";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Support from "./routes/Support";
import Documents from "./routes/Documents";
import Resources from "./routes/Resources";
import MSA from "./routes/MSA";
import SOW from "./routes/SOW";

import Favicon from "./images/favicon.png";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#E5E5E5",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider>
        <Helmet>
          <title>ROR Onboarding</title>
          <link rel="shortcut icon" type="image/png" href={Favicon} />
        </Helmet>
        <Header />
        <div className={classes.root}>
          <Switch>
            <PublicRoute path="/" exact restricted>
              <Register />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <Login />
            </PublicRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/support">
              <Support />
            </PrivateRoute>
            <PrivateRoute path="/documents">
              <Documents />
            </PrivateRoute>
            <PrivateRoute path="/resources">
              <Resources />
            </PrivateRoute>
            <PublicRoute path="/msa">
              <MSA />
            </PublicRoute>
            <PublicRoute path="/sow">
              <SOW />
            </PublicRoute>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
