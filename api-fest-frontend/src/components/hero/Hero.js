import { makeStyles } from "@material-ui/core";
import { Box, Button,   } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './hero.css';

const useStyles = makeStyles({
    box:{
        display: 'flex',
        height: '90vh',
    },
    container1:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#F0F0F0",
        alignItems: 'start',
        justifyContent: 'center',
        paddingBottom: '4rem' ,
        paddingLeft: '3rem',
        width: '50vw',
    },
    // container2:{
    //     width: '50vw',
    //     backgroundColor: '#F37C50',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
 
})

function Hero() {
    const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.container1}>
        <div className="home_text">
            <h1>MANAGEX</h1>
            <h3>An application to maintain the data of the employess, and can also add, delete, update data based on the requirement.</h3>
        </div>
        <Button style={{ background: "#FF6C37", color: "#fff", width:'160px', marginTop: '2rem', padding: '1rem' }}>
        <Link to="/signup" style={{color: '#fff', textDecoration: 'none'}}>GET STARTED</Link>
        </Button>
      </Box>
      <Box
          style={{ width: "50vw", height: "90vh", backgroundColor: "#fff222" }}
        >
          <img
            src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643301798/sign_up_cpqnhp.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      {/* <Box className={classes.container2}>
          <div className="hero_textbox">
              <p>An application to maintain the data of the employess, and can also add, delete, update data based on the requirement.</p>
          </div>
      </Box> */}
    </Box>
  );
}

export default Hero;