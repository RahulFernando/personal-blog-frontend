import { createContext } from 'react'

const AuthContext = createContext({
    token: null,
    userName: null,
    onLogin: (token, userName) => {},
    onLogout: () => {}
});

export default AuthContext;