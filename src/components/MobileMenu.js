import React from "react";
import { Link } from "react-router-dom";

import fa from "@fortawesome/fontawesome-free/css/all.css";
import {
  Box,
  Button,
  Container,
  Drawer as MuiDrawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ROR_Logo from "../images/ror_logo.png";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
    backgroundColor: "#3C456B",
    borderRight: "10px solid #5163AD",
  },
  container: {
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    color: "white",
  },
  icon: {
    width: "auto",
  },
}));

const Drawer = ({ open = false, onClose }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      className={classes.drawer}
      PaperProps={{
        classes: {
          root: classes.drawerPaper,
        },
      }}
      open={open}
      onClose={onClose}
      anchor="left"
    >
      <Container className={classes.container} maxWidth="sm">
        <List>
          <Box pb={5}>
            <Link to="/dashboard">
              <img src={ROR_Logo} />
            </Link>
          </Box>

          <ListItem
            button
            component={Link}
            to="/support"
            /* onClick={e => {
              navigate("/support")
            }} */
          >
            <ListItemIcon>
              {/* <ContactSupportIcon color="secondary" /> */}
              <Icon
                className="fa fa-id-card"
                color="secondary"
                fontSize="small"
                classes={{ root: classes.icon }}
              />
            </ListItemIcon>
            <ListItemText primary="Support Team" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/documents"
            /* onClick={e => {
              navigate("/support")
            }} */
          >
            <ListItemIcon>
              <Icon
                className="fa fa-file-signature"
                color="secondary"
                fontSize="small"
                classes={{ root: classes.icon }}
              />
            </ListItemIcon>
            <ListItemText primary="Documents" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/resources"
            /* onClick={e => {
              navigate("/support")
            }} */
          >
            <ListItemIcon>
              <Icon
                className="fa fa-book"
                color="secondary"
                fontSize="small"
                classes={{ root: classes.icon }}
              />
              {/* <MenuBookIcon color="secondary" /> */}
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
        </List>
      </Container>
    </MuiDrawer>
  );
};

export default Drawer;
