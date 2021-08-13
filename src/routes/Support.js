import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Icon,
  MobileStepper,
  Paper,
  Tabs,
  Tab,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import ProfileCard from "./../components/ProfileCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    flexGrow: 1,
    paddingTop: "2rem",
  },
  container: {
    margin: "3rem auto",
  },
  grid: {
    width: "100%",
  },
  image: {
    marginBottom: "1rem",
  },
}));

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Box textAlign="center">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Account Team" style={{ fontWeight: 700 }} />
              <Tab label="Media & Analytics" style={{ fontWeight: 700 }} />
              <Tab label="Data Integration" style={{ fontWeight: 700 }} />
            </Tabs>

            <Box hidden={activeTab !== 0}>
              <Box py={5}>
                <Button
                  component="a"
                  href="mailto:kent.lehnhoff@rorpartners.com?subject=Crunch | Account Team Message"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Contact Us With Questions
                </Button>
              </Box>
              <Container disableGutters>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Mike Carney"
                      description="SVP & Chief Client Officer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/mike-carney.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Kent Lehnhoff"
                      description="VP, Business Development"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/ken-lehnhoff.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Jenn Galantini"
                      description="VP, Client Accounts"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/jenn-galantini.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Kari Wehler"
                      description="Sr. Account Manager"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/kari-wehler.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Stacy Carney"
                      description="Account Manager"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/stacy-carney.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Emily Royster"
                      description="Account Executive"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/emily-royster.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box hidden={activeTab !== 1}>
              <Box py={5}>
                <Button
                  component="a"
                  href="mailto:kent.lehnhoff@rorpartners.com?subject=Crunch | Media Team Message"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Contact Us With Questions
                </Button>
              </Box>
              <Container disableGutters>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Tom Lanahan"
                      description="SVP & Chief Operating Officer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/tom-lanahan.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Courtney Conroy"
                      description="VP, Digital Media"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/courtney-conroy.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Paul Reyes"
                      description="Director Social Media"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/paul-reyes.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Jeff Silva"
                      description="Director Digital Media"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/jeff-silva.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Rebecca Buscemi"
                      description="Sr. Digital Media Specialist, Social Media"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/rebecca-buscemi.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Lee Ann Benson"
                      description="Director of Analytics"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/lee-benson.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Tasha Celi"
                      description="Director, Email & CRM"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/tasha-celi.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Mary Jo Malooly"
                      description="Digital Display"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/mary-malooly.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Zach Luechauer"
                      description="Traditional & OOH Media Buyer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/zach-luechauer.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box hidden={activeTab !== 2}>
              <Box py={5}>
                <Button
                  component="a"
                  href="mailto:kent.lehnhoff@rorpartners.com?subject=Crunch | Data Team Message"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Contact Us With Questions
                </Button>
              </Box>
              <Container disableGutters>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Tom Lanahan"
                      description="SVP & Chief Operating Officer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/tom-lanahan.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Ryan Lapcevic"
                      description="Principal Engineer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/ryan-lapcevic.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Ursula Amato"
                      description="Web Operations Manager"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/ursula-amato.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Akhil Manchikanti"
                      description="Software Engineer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/akhil-manchikanti.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="John Hayes"
                      description="Software Engineer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/john-hayes.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Jennifer Schmidt"
                      description="IT Administrator"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/jennife-schmidt.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Andrew Studer"
                      description="Jr. Software Engineer"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/andre-studer.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard
                      name="Kaitlin Cooley"
                      description="Data Production Manager"
                    >
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL +
                          "/headshots/kaitli-cooley.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ProfileCard name="Dom White" description="Data Specialist">
                      <img
                        className={classes.image}
                        src={
                          process.env.PUBLIC_URL + "/headshots/dom-white.png"
                        }
                        width={100}
                      />
                    </ProfileCard>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default SupportPage;
