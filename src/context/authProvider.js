import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "./authContext";

const AuthProvider = (props) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutHandler = () => {
    setToken();
    setUser();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const context = {
    token,
    user,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
