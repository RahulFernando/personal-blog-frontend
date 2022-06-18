import React from "react";
import { Box, CssBaseline } from "@mui/material";

// context
import AuthProvider from '../../context/authProvider'

// components
import Header from "../header/Header";
import Hero from "../hero/Hero";

const pages = ["Home", "About"];

const Layout = () => {
  return (
    <AuthProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header pages={pages} />
      </Box>
      <Hero />
    </AuthProvider>
  );
};

export default Layout;
