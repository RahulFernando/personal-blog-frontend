import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  user: { name: "", role: "" },
  onLogin: (token, user) => {},
  onLogout: () => {},
});

export default AuthContext;
