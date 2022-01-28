import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  login_button: {
    backgroundColor: "#FF6C37",
    color: "#fff",
    fontWeight: 800,
    width: "20vw",
    padding: "0.7rem",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  link: {
    fontSize: 25,
    color: "#fff",
    textDecoration: "none",
  },
  login_form: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    height: "40vh",
  },
  login_right: {
    width: "50vw",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
  },
  login_left: {
    width: "50vw",
    height: "70vh",
    backgroundColor: "#000",
  },
  container: {
    width: "90vw",
    height: "70vh",
    display: "flex",
    backgroundColor: "#FF6C37",
    margin: "auto",
  },
  main_container: {
    height: "90vh",
    display: "flex",
    backgroundColor: "#2C2C2C",
  },
});

function Login() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.container}>
        <Box className={classes.login_left}>
          <img
            src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643300909/login_pic_brcubr.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box className={classes.login_right}>
          <Box className={classes.login_form}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "30vw" }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              style={{ width: "30vw" }}
            />
            <Link to="/dashboard" className={classes.link}>
              <Button className={classes.login_button}>LOG IN</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
