import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    width: "60vw",
    height: "90vh",
    backgroundColor: "#2C2C2C",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    color: "#f2f2f2",
    fontSize: "2.5rem",
    paddingTop: "2rem",
  },
});

function createData(name, salary, age, id) {
  return { name, salary, age, id };
}

const rows = [
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
  createData("Virat Kohli", "$1200", 32, "fr47rf4e5r4"),
];

function GetData() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      <Box className={classes.left_container}>
        <img
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1643378454/apiFest-%20manageX/46b67d8fd0255e2f677f4306c867f8c1_svj9cq.webp"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box className={classes.right_container}>
        <Typography className={classes.heading}>All Employee Data</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Employee Name </TableCell>
                <TableCell align="right">salary</TableCell>
                <TableCell align="right">age</TableCell>
                <TableCell align="right">Employee id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.salary}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default GetData;
