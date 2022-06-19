import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
  },
});

const Category = () => {
  const styles = useStyles();
  return (
    <Paper>
      <Grid container p={2}>
        <Grid item xs={3}>
          <Link to="/about" className={styles.link}>
            ReactJs
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="#" className={styles.link}>
            ReactJs
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="#" className={styles.link}>
            ReactJs
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Category;
