import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";

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
    backgroundColor: "#2C2C2C",
    alignItems: 'center'
  },
  signup_form: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
    margin: "auto",
    padding: "2rem",
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
  link: {
    fontSize: 25,
    color: "#fff",
    textDecoration: "none",
  },
  heading:{
      color: '#f2f2f2',
      fontSize: '2.5rem',
      paddingTop: '2rem',
  }
});

function AddData() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.left_container}>
        <img
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643378933/apiFest-%20manageX/c9766811449634cab83a657a51c8448c_ysxcvy.webp"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box className={classes.right_container}>
        <Typography className={classes.heading}>Add User Data</Typography>
        <Box className={classes.signup_form}>
          <TextField
            id="outlined-basic"
            label="User ID"
            variant="outlined"
            style={{ width: "30vw" }}
          />
          <TextField
            id="outlined-basic"
            label="Employee Name"
            variant="outlined"
            style={{ width: "30vw" }}
          />
          <TextField
            id="outlined-basic"
            label="Employee Age"
            variant="outlined"
            style={{ width: "30vw" }}
          />
          <TextField
            id="outlined-basic"
            label="Salary"
            variant="outlined"
            style={{ width: "30vw" }}
          />
          {/* <Link  className={classes.link}> */}
          <Button className={classes.signup_button} 
        //   onClick={alert('User Added Successfully')}
          >ADD USER</Button>
          {/* </Link> */}
        </Box>
      </Box>
    </Box>
  );
}

export default AddData;
