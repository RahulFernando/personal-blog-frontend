import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/layout/Layout'

// context
import AuthProvider from './context/authProvider'

import theme from './helpers/theme'

// draft
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";

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
