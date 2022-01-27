import React from 'react';
import { Box, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Signup() {
  return (
<Box style={{ height: "90vh", display: "flex", backgroundColor: "#2C2C2C", }}>
      <Box
        style={{
          width: "90vw",
          height: "70vh",
          display: "flex",
          backgroundColor: "#FF6C37",
          margin: "auto",
          
        }}
      >
        <Box
          style={{ width: "50vw", height: "70vh", backgroundColor: "#fff222" }}
        >
          <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643302516/c6f292e171c4cbd1ccf107ab3bd770d9_ml3dmo.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
        </Box>
        <Box
          style={{
            width: "50vw",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#f2f2f2",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "30vw" }}
            />
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
            <Link to="/dashboard" style={{fontSize: 25, color: '#fff', textDecoration: 'none'}}>

            <Button
              style={{
                backgroundColor: "#FF6C37",
                color: "#fff",
                fontWeight: 800,
                width: "20vw",
                padding: '0.7rem'
              }}
            >
              SIGN UP
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
