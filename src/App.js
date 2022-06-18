import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/layout/Layout'

import theme from './helpers/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
