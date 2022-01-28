import { Button, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";

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
});

function AddData() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.left_container}>
        <Box className={classes.user_container}></Box>
      </Box>
      <Box className={classes.right_container}></Box>
    </Box>
  );
}

export default AddData;
