import React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { glide } from "react-tiger-transition/cjs/react-tiger-transition.min";
// import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    // color: '#FF6C37',
    height: "10vh",
  },
});

glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

function Header() {
  const classes = useStyles();
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="sticky"
      className={classes.header}
      style={{ background: "#FF6C37" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{fontSize: 25, color: '#fff', textDecoration: 'none'}}>MANAGE-X</Link>
        </Typography>
        <Box>
          <Button
            color="inherit"
            style={{ background: "#fff", color: "#FF6C37" }}
          >
            <Link to="/login" transition='glide-right' style={{color: '#FF6C37', textDecoration: 'none'}}>Log In</Link>
          </Button>
          <Button
            color="inherit"
            style={{ background: "#fff", color: "#FF6C37", marginLeft: "2rem" }}
          >
            <Link to="/signup" transition='glide-right' style={{color: '#FF6C37', textDecoration: 'none'}}>Sign Up</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}

export default Header;
