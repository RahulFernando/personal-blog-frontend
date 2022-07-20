import React, { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  login,
  register,
  registerReset,
  loginReset,
} from "../../reducers/authSlice";
import { setAlert, resetAlert } from "../../reducers/uiSlice";

const Header = ({ pages }) => {
  const { token, onLogin, onLogout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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

  const handleMenuItemClick = (path) => navigate(path);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
    loginFormik.resetForm();
    registerFormik.resetForm();
  }, [loginFormik, registerFormik]);

  const linkClickHandler = (type) => {
    if (type === "LOGIN") setIsLogin(true);
    if (type === "REGISTER") setIsLogin(false);
  };

  useEffect(() => {
    if (registrationSuccess) {
      registerFormik.resetForm();
      dispatch(setAlert({ message: registrationSuccess }));

      // redirect to login and reset alert message
      setTimeout(() => {
        dispatch(registerReset());
        dispatch(resetAlert());
        setIsLogin(true);
      }, 3000);
    }
  }, [dispatch, registerFormik, registrationSuccess]);

  useEffect(() => {
    if (loginSuccess) {
      dispatch(setAlert({ message: "Login success!" }));
      onLogin(loginSuccess.token, loginSuccess.user);

      // reset alert message and close modal
      setTimeout(() => {
        dispatch(loginReset());
        dispatch(resetAlert());
        handleCloseUserMenu();
      }, 2000);
    }
  }, [dispatch, handleCloseUserMenu, loginSuccess, onLogin]);

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
                  <MenuItem key={page.title} onClick={handleMenuItemClick.bind(null, page.path)}>
                    <Typography textAlign="center">{page.title}</Typography>
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
                  key={page.title}
                  onClick={handleMenuItemClick.bind(null, page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {token && (
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={onLogout}
                >
                  Logout
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
        title={isLogin ? "Login" : "Register"}
        button={isLogin ? "Login" : "Register"}
        onClose={handleCloseUserMenu}
        onSubmit={
          isLogin ? loginFormik.handleSubmit : registerFormik.handleSubmit
        }
      >
        {isLogin && (
          <Login formik={loginFormik} onLinkClick={linkClickHandler} />
        )}
        {!isLogin && (
          <Register formik={registerFormik} onLinkClick={linkClickHandler} />
        )}
      </Modal>
    </>
  );
};

Header.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

Header.defaultProps = {
  pages: [],
};

export default Header;
