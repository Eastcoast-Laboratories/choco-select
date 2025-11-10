import React from 'react';
import { Box, Container, CssBaseline, Link, ThemeProvider, createTheme, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Imprint } from './pages/Imprint';
import { Privacy } from './pages/Privacy';
import './i18n/config';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
            <Container maxWidth="lg">
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 1 }}>
                <Link component={RouterLink} to="/imprint" color="text.secondary" underline="hover">
                  {t('footer.imprint')}
                </Link>
                <Link component={RouterLink} to="/privacy" color="text.secondary" underline="hover">
                  {t('footer.privacy')}
                </Link>
              </Box>
              <Typography variant="body2" color="text.secondary" align="center">
                {new Date().getFullYear()} - {t('app.footer')}
              </Typography>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
