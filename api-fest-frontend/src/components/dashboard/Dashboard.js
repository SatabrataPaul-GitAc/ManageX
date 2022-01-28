import { Button, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main_container: {
    display: "flex",
    width: "100vw",
    height: "90vh",
  },
  left_container: {
    display: "flex",
    width: "30vw",
    height: "90vh",
    backgroundColor: "#2C2C2C",
    justifyContent: "center",
    alignItems: "center",
  },
  right_container: {
    display: "flex",
    width: "70vw",
    height: "80vh",
  },
  user_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard_cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard_card: {
    width: "300px",
    height: "160px",
    backgroundColor: "#000",
    margin: "4rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  },
  image_dashboard: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  image_box: {
    width: "250px",
    height: "250px",
    borderRadius: "100px",
  },
  image_user: {
    borderRadius: "100px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  user_text: {
    color: "#f2f2f2",
    fontSize: "24px",
    paddingTop: "1rem",
  },
  button_box: {
    display: "flex",
    backgroundColor: "#FF6C37",
  },
  button: {
    margin: "0.5rem auto 0.5rem auto",
    color: "#FF6C37",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#2C2C2C",
    },
  },
  link_dashboardButton: {
    fontSize: 25,
    color: "#fff",
    textDecoration: "none",
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.left_container}>
        <Box className={classes.user_container}>
          <Box className={classes.image_box}>
            <img
              className={classes.image_user}
              src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643319794/apiFest-%20manageX/332c5c67ab9b4c640869b6ba87d96882_wjf2ph.webp"
              alt=""
            />
          </Box>
          <Typography className={classes.user_text}>User Name</Typography>
        </Box>
      </Box>
      <Box className={classes.right_container}>
        <div className={classes.dashboard_cards}>
          <div className={classes.dashboard_card}>
            <Box>
              <img
                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318639/apiFest-%20manageX/f26c8f68306696139b8bc31913d76f39_tapjvj.webp"
                alt=""
                className={classes.image_dashboard}
              />
            </Box>
            <Link to="/getdata" className={classes.link_dashboardButton}>
              <Box className={classes.button_box}>
                <Button className={classes.button}>GET DATA</Button>
              </Box>
            </Link>
          </div>
          <div className={classes.dashboard_card}>
            <Box>
              <img
                className={classes.image_dashboard}
                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318641/apiFest-%20manageX/c5a77d44e270b92eec76663b1e4d9f36_k9k4wj.webp"
                alt=""
              />
            </Box>
            <Link to="/adddata" className={classes.link_dashboardButton}>
              <Box className={classes.button_box}>
                <Button className={classes.button}>ADD DATA</Button>
              </Box>
            </Link>
          </div>
          <div className={classes.dashboard_card}>
            <Box>
              <img
                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318640/apiFest-%20manageX/c4a5283fec6419b8b1febdc4e4d83321_wrm1dg.webp"
                alt=""
                className={classes.image_dashboard}
              />
            </Box>
            <Link to="/updatedata" className={classes.link_dashboardButton}>
              <Box className={classes.button_box}>
                <Button className={classes.button}>UPDATE DATA</Button>
              </Box>
            </Link>
          </div>
          <div className={classes.dashboard_card}>
            <Box>
              <img
                src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318828/apiFest-%20manageX/87ac6cd389221848df5607ad582b9853_ubmzbo.webp"
                alt=""
                className={classes.image_dashboard}
              />
            </Box>
            <Link to="/deletedata" className={classes.link_dashboardButton}>
              <Box className={classes.button_box}>
                <Button className={classes.button}>DELETE DATA</Button>
              </Box>
            </Link>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Dashboard;
