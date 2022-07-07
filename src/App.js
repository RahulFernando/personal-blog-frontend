import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/layout/Layout'

// context
import AuthProvider from './context/authProvider'

import theme from './helpers/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
