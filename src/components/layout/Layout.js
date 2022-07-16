import React, { Suspense, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

// context
import AuthContext from "../../context/authContext";

// components
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Loading from "../loading/Loading";
import Category from "./Category";

// routes
import { publicRoutes, adminRoutes } from "../../helpers/routes";

const pages = ["Home", "About"];
const adminPages = ["Home"];

const Layout = () => {
  const location = useLocation();
  const { token, user } = useContext(AuthContext);

  const appBarOptions = user?.role === "admin" ? adminPages : pages;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header pages={appBarOptions} />
      </Box>
      {location.pathname === "/" && <Hero />}
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f7f7f7" }}>
        {location.pathname === "/" && <Category />}
        <Suspense fallback={<Loading />}>
          <Routes>
            {publicRoutes.map(
              (route) =>
                route.isPrivate &&
                !route.isAdmin &&
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
                !route.isPrivate &&
                !route.isAdmin &&
                user?.role !== "admin" && (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route.element}
                  />
                )
            )}
            {adminRoutes.map(
              (route) =>
                route.isPrivate &&
                token &&
                route.isAdmin && (
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
    </>
  );
};

export default Layout;
