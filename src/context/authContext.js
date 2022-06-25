import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  user: { name: "", role: "" },
  onLogin: (token, userName) => {},
  onLogout: () => {},
});

export default AuthContext;
