import React, { Suspense, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

// context
import AuthContext from "../../context/authContext";
import AuthProvider from "../../context/authProvider";

// components
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Loading from "../loading/Loading";
import Category from "./Category";

// routes
import { publicRoutes } from "../../helpers/routes";

const pages = ["Home", "About"];

const Layout = () => {
  const location = useLocation();
  const { token } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header pages={pages} />
      </Box>
      <Hero />
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f7f7f7" }}>
        {location.pathname === "/" && <Category />}
        <Suspense fallback={<Loading />}>
          <Routes>
            {publicRoutes.map(
              (route) =>
                route.isPrivate &&
                token && (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route.element}
                  />
                )
            )}
            {publicRoutes.map(
              (route) =>
                !route.isPrivate && (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route.element}
                  />
                )
            )}
          </Routes>
        </Suspense>
      </Box>
    </AuthProvider>
  );
};

export default Layout;
