import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    fontWeight: 700,
  },
  btn: {
    textTransform: "none !important",
  },
});

const NotFound = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h2" color="primary.dark" className={styles.title}>
          404
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="primary.dark" className={styles.title}>
          Oops!
        </Typography>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Button onClick={buttonClickHandler} variant="contained" className={styles.btn}>
          Go Back To Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
