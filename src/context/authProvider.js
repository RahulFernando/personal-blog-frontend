import React, { useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const loginHandler = (token, userName) => {
    setToken(token);
    setUserName(userName);
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
  };

  const logoutHandler = () => {
    setToken();
    setUserName();
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  };

  const context = {
    token,
    userName,
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
