import { Button, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  dashboard_card: {
    width: "300px",
    height: "160px",
    backgroundColor: "#000",
    margin: "4rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: '20px',
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <Box style={{ display: "flex", width: "100vw", height: "90vh" }}>
      <Box
        style={{
          display: "flex",
          width: "30vw",
          height: "90vh",
          backgroundColor: "#2C2C2C",justifyContent: "center", alignItems: "center"
        }}
      >
        <Box style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
          <Box style={{width: '250px', height: '250px', borderRadius: "100px"}}>
            <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643319794/apiFest-%20manageX/332c5c67ab9b4c640869b6ba87d96882_wjf2ph.webp" alt="" style={{ borderRadius: "100px", width: '100%', height: '100%', objectFit: 'cover'}}/>
          </Box>
          <Typography style={{color: '#f2f2f2', fontSize: '24px', paddingTop: '1rem'}}>User Name</Typography>
        </Box>
      </Box>
      <Box style={{ display: "flex", width: "70vw", height: "80vh" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <div className={classes.dashboard_card}>
            <Box>
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318639/apiFest-%20manageX/f26c8f68306696139b8bc31913d76f39_tapjvj.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box>
            <Box style={{display: "flex", backgroundColor: "#FF6C37"}}>
              <Button style={{margin: "0.5rem auto 0.5rem auto", color: '#FF6C37', backgroundColor: '#fff'}}>GET DATA</Button>
            </Box>
          </div>
          <div className={classes.dashboard_card}>
            <Box>
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318641/apiFest-%20manageX/c5a77d44e270b92eec76663b1e4d9f36_k9k4wj.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box>
            <Box style={{display: "flex", backgroundColor: "#FF6C37"}}>
              <Button style={{margin: "0.5rem auto 0.5rem auto", color: '#FF6C37', backgroundColor: '#fff'}}>ADD DATA</Button>
            </Box>
          </div>
          <div className={classes.dashboard_card}>
            <Box>
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318640/apiFest-%20manageX/c4a5283fec6419b8b1febdc4e4d83321_wrm1dg.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box>
            <Box style={{display: "flex", backgroundColor: "#FF6C37"}}>
              <Button style={{margin: "0.5rem auto 0.5rem auto", color: '#FF6C37', backgroundColor: '#fff'}}>UPDATE DATA</Button>
            </Box>
          </div>
          <div className={classes.dashboard_card}>
            <Box>
              <img src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643318828/apiFest-%20manageX/87ac6cd389221848df5607ad582b9853_ubmzbo.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box>
            <Box style={{display: "flex", backgroundColor: "#FF6C37"}}>
              <Button style={{margin: "0.5rem auto 0.5rem auto", color: '#FF6C37', backgroundColor: '#fff'}}>DELETE DATA</Button>
            </Box>
          </div>
          
        </div>
      </Box>
    </Box>
  );
}

export default Dashboard;
