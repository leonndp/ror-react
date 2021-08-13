import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { handleLogin, isLoggedIn } from "../services/auth";

import {
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import CrunchLogo from "./../images/crunch-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    flexGrow: 1,
  },
  container: {
    margin: "auto",
  },
  crunchLogo: {
    position: "absolute",
    top: "5rem",
    right: "5rem",
    [theme.breakpoints.down("md")]: {
      right: "2rem",
    },
  },
}));

const LoginPage = () => {
  const theme = useTheme();
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      console.log(true);
      /* history.push("/dashboard"); */
    }
  }, []);

  const handleUpdate = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleLogin(password)) {
      setError(true);
      return false;
    }
  };

  const classes = useStyles();

  return (
    <>
      <img className={classes.crunchLogo} src={CrunchLogo} />
      <Container className={classes.container} maxWidth="sm">
        <Typography color="textPrimary" variant="h4">
          Password protected site
        </Typography>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={error}
          onClose={() => setError(false)}
          message="Incorrect Password"
        />
        <form
          method="post"
          onSubmit={(event) => {
            handleSubmit(event);
            history.push("/dashboard");
          }}
        >
          <Box my={3}>
            <TextField
              fullWidth
              variant="filled"
              label="Please enter your password to get access"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              placeholder="Enter access code"
              type="password"
              onChange={handleUpdate}
              value={password}
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
