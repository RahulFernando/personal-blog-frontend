import React, { useState, useContext, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  Avatar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

// context
import AuthContext from "../../context/authContext";

// components
import Modal from "../modal/Modal";
import Login from "../auth/Login";
import Register from "../auth/Register";

// actions
import { login, register, registerReset, loginReset } from "../../reducers/authSlice";
import { setAlert, resetAlert } from "../../reducers/uiSlice";

const Header = ({ pages }) => {
  const { token, user } = useContext(AuthContext);
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const registrationSuccess = useSelector(
    (state) => state.authentication.registerData.data
  );
  const loginSuccess = useSelector(
    (state) => state.authentication.loginData.data
  );

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter valid email")
        .required("Email is required"),
      password: Yup.string().trim().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      user_name: Yup.string().required("User name is required"),
      email: Yup.string()
        .email("Please enter valid email")
        .required("Email is required"),
      password: Yup.string().trim().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              iTech
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              iTech
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {token && (
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Hi {user?.name}
                </Button>
              )}
              {!token && (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="profile"
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=395"
                  />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={Boolean(anchorElUser)}
        title="Login"
        onClose={handleCloseUserMenu}
      >
        <Login />
      </Modal>
    </>
  );
};

Header.propTypes = {
  pages: PropTypes.array,
};

Header.defaultProps = {
  pages: [],
};

export default Header;
