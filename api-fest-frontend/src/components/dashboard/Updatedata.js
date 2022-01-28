import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles({
  main_container: {
    display: "flex",
    width: "100vw",
    height: "90vh",
  },
  left_container: {
    display: "flex",
    width: "40vw",
    height: "90vh",
    backgroundColor: "#2C2C2C",
    justifyContent: "center",
    alignItems: "center",
  },
  right_container: {
    display: "flex",
    flexDirection: "column",
    width: "60vw",
    height: "90vh",
    alignItems: "center",
  },
  right_container_top: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  right_container_bottom: {
    backgroundColor: "#fff",
    // width: "60vw",
  },
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
  heading: {
    color: "#000",
    fontSize: "2.5rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  update_form: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
    margin: "auto",
    padding: "2rem",
    // backgroundColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: "20px",
  },
  signup_button: {
    backgroundColor: "#FF6C37",
    color: "#fff",
    fontWeight: 800,
    width: "20vw",
    padding: "0.7rem",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
});

function Updatedata() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.left_container}>
        <img
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643382069/apiFest-%20manageX/48de6f66dc212e337d1b8dac6229ede3_ogicuv.webp"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box className={classes.right_container}>
        <Typography className={classes.heading}>Update Data</Typography>
        <Box className={classes.right_container_top}>
          <TextField
            id="outlined-basic"
            label="Employee ID"
            variant="outlined"
            style={{ width: "30vw", paddingBottom: "1rem" }}
          />
          <Button className={classes.login_button}>ENTER</Button>
        </Box>
        <Box className={classes.right_container_bottom}>
          <Box className={classes.update_form}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Virat Kohli"
                variant="filled"
                style={{ width: "18vw" }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="$1200"
                variant="filled"
                style={{ width: "18vw" }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EditIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="32"
                variant="filled"
                style={{ width: "18vw" }}
              />
            </Box>
            {/* <Link  className={classes.link}> */}
            <Button
              className={classes.signup_button}
              //   onClick={alert('User Added Successfully')}
            >
              UPDATE USER
            </Button>
            {/* </Link> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Updatedata;
