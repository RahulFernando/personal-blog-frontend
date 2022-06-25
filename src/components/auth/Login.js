import React from "react";
import { Grid, TextField } from "@mui/material";

const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField required label="Email" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField type="password" required label="Password" fullWidth />
      </Grid>
    </Grid>
  );
};

export default Login;
