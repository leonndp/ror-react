import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  ButtonBase,
  Container,
  Drawer,
  Grid,
  Icon,
  MobileStepper,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import ItemBox from "./../components/ItemBox";

import StarIcon from "../images/star-icon.png";
import MegaphoneIcon from "../images/megaphone-icon.png";

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
  image: {
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    display: "block",
  },
}));

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth="md">
          <Box mx={"auto"} textAlign="center">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component={Link}
                  to="/documents"
                  classes={{ root: classes.button }}
                >
                  <ItemBox>
                    <Box textAlign="center">
                      <img src={StarIcon} className={classes.image} />
                      <Typography color="primary" gutterBottom variant="h3">
                        Ready to
                        <br />
                        Get Started
                      </Typography>
                      <DoubleArrowIcon color="primary" />
                    </Box>
                  </ItemBox>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component={Link}
                  to="/resources"
                  classes={{ root: classes.button }}
                >
                  <ItemBox>
                    <Box textAlign="center">
                      <img src={MegaphoneIcon} className={classes.image} />
                      <Typography color="primary" gutterBottom variant="h3">
                        Learn
                        <br />
                        More
                      </Typography>
                      <DoubleArrowIcon color="primary" />
                    </Box>
                  </ItemBox>
                </ButtonBase>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default DashboardPage;
