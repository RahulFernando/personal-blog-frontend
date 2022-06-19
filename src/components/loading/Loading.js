import React from "react";
import { Grid, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h6" color="primary.dark">
          Loading...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Loading;
